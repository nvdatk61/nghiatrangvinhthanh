"use client";

import { useState, useMemo } from "react";
import { CEMETERY_DATA, type Grave } from "@/lib/cemetery-data";
import { GraveCard } from "./grave-card";
import { GraveDetailSheet } from "./grave-detail-sheet";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function CemeteryMap() {
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Find all graves matching the search query
  const matchingIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    
    const matched = new Set<string>();
    CEMETERY_DATA.forEach((grave) => {
      if (
        grave.name.toLowerCase().includes(q) ||
        grave.id.toLowerCase().includes(q)
      ) {
        matched.add(grave.id);
      }
    });
    return matched.size > 0 ? matched : null;
  }, [searchQuery]);

  function handleClick(grave: Grave) {
    setSelectedGrave(grave);
    setSheetOpen(true);
  }

  // Calculate the grid's row and column span based on data
  const maxRow = Math.max(...CEMETERY_DATA.map((g) => g.row));
  const maxCol = 23; // Fixed at 23 columns (A-W, with center aisle at cols 13-15)

  return (
    <div className="min-h-screen font-sans" style={{ background: "#f5f0e8" }}>
      {/* ── Title & Search ────────────────────────────────── */}
      <div className="px-4 pt-6 pb-4">
        <h1
          className="text-center text-3xl font-bold mb-4"
          style={{ color: "#dc2626" }}
        >
          NGHĨA TRANG LIỆT SĨ
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc mã..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-slate-300"
            />
          </div>
        </div>
      </div>

      {/* ── Grand CSS Grid Layout ────────────────────────────────── */}
      <div className="px-4 pb-8">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(23, minmax(0, 1fr))`,
            gap: "0px",
            padding: "0px",
          }}
        >
          {CEMETERY_DATA.map((grave) => {
            const isMatching = !matchingIds || matchingIds.has(grave.id);
            const dimmed = matchingIds && !isMatching;

            return (
              <div
                key={grave.id}
                style={{
                  gridColumn: grave.col,
                  gridRow: grave.row,
                  opacity: dimmed ? 0.25 : 1,
                  transition: "opacity 200ms ease-in-out",
                }}
              >
                <GraveCard
                  grave={grave}
                  isSelected={selectedGrave?.id === grave.id}
                  onClick={handleClick}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Detail Sheet ────────────────────────────────── */}
      {selectedGrave && (
        <GraveDetailSheet
          grave={selectedGrave}
          open={sheetOpen}
          onOpenChange={setSheetOpen}
        />
      )}
    </div>
  );
}
