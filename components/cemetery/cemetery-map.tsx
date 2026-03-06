"use client";

import { useState, useMemo } from "react";
import { CEMETERY_DATA, type Grave } from "@/lib/cemetery-data";
import { GraveCard } from "./grave-card";
import { GraveDetailSheet } from "./grave-detail-sheet";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function CemeteryMap() {
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Find all graves matching the search query
  const matchingIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    
    const matched = new Set<string>();
    CEMETERY_DATA.forEach((section) => {
      section.graves.forEach((grave) => {
        if (
          grave.name.toLowerCase().includes(q) ||
          grave.id.toLowerCase().includes(q)
        ) {
          matched.add(grave.id);
        }
      });
    });
    return matched.size > 0 ? matched : null;
  }, [searchQuery]);

  function handleClick(grave: Grave, sectionName: string) {
    setSelectedGrave(grave);
    setSelectedSection(sectionName);
    setSheetOpen(true);
  }

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

        {/* Search bar */}
        <div className="flex justify-center mb-4">
          <div className="relative w-80">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Tìm kiếm tên hoặc ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9 text-sm bg-white border-slate-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* ── Sections ────────────────────────────────────── */}
      <div className="space-y-8 px-4 pb-8">
        {CEMETERY_DATA.map((section) => {
          const visibleGraves = !matchingIds
            ? section.graves
            : section.graves.filter((g) => matchingIds.has(g.id));

          // Skip sections with no visible graves when searching
          if (matchingIds && visibleGraves.length === 0) {
            return null;
          }

          return (
            <div key={section.sectionName}>
              {/* Section header */}
              <div className="mb-3">
                <h2 className="text-lg font-bold text-slate-800">
                  {section.sectionName}{" "}
                  <span className="text-sm font-normal text-slate-600">
                    ({visibleGraves.length} mộ)
                  </span>
                </h2>
              </div>

              {/* Graves grid */}
              <div className="flex flex-wrap gap-1">
                {visibleGraves.map((grave) => {
                  const dimmed = matchingIds && !matchingIds.has(grave.id);
                  const isSelected = selectedGrave?.id === grave.id;

                  return (
                    <div
                      key={grave.id}
                      style={{
                        width: 72,
                        minWidth: 72,
                        maxWidth: 72,
                        height: 52,
                        opacity: dimmed ? 0.25 : 1,
                      }}
                    >
                      <GraveCard
                        grave={grave}
                        isSelected={isSelected}
                        onClick={() => handleClick(grave, section.sectionName)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Detail Sheet ────────────────────────────────── */}
      <GraveDetailSheet
        grave={selectedGrave}
        sectionName={selectedSection}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
