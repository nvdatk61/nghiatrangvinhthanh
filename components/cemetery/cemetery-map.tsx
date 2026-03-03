"use client";

import { useState, useMemo } from "react";
import {
  CEMETERY_DATA,
  LEFT_BLOCK_ROWS,
  RIGHT_BLOCK_ROWS,
  type GraveRecord,
} from "@/lib/cemetery-data";
import { GraveCard } from "./grave-card";
import { GraveDetailSheet } from "./grave-detail-sheet";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function CemeteryMap() {
  const [selectedGrave, setSelectedGrave] = useState<GraveRecord | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // IDs of graves matching the search
  const matchingIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    const matched = new Set(
      CEMETERY_DATA.filter(
        (g) =>
          g.deceased?.fullName.toLowerCase().includes(q) ||
          g.plotNumber.toLowerCase().includes(q)
      ).map((g) => g.id)
    );
    return matched;
  }, [searchQuery]);

  function handleClick(grave: GraveRecord) {
    setSelectedGrave(grave);
    setSheetOpen(true);
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "#f5f0e8" }}
    >
      {/* ── Search bar ────────────────────────────────────── */}
      <div className="flex justify-end px-4 pt-3 pb-1">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Tìm kiếm tên hoặc số mộ..."
            className="pl-8 h-8 text-xs bg-white border-slate-300 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── Cemetery Title ────────────────────────────────── */}
      <h1
        className="text-center font-bold tracking-wide pt-2 pb-5"
        style={{
          fontSize: "clamp(14px, 2.5vw, 22px)",
          color: "#cc0000",
          fontFamily: "serif",
          letterSpacing: "0.04em",
        }}
      >
        NGHĨA TRANG LIỆT SĨ XÃ SONG MAI
      </h1>

      {/* ── Two-block map ─────────────────────────────────── */}
      <div className="px-4 pb-8 overflow-x-auto">
        <div className="flex gap-8 min-w-max mx-auto w-fit">
          {/* Left block */}
          <GraveBlock
            rows={LEFT_BLOCK_ROWS}
            matchingIds={matchingIds}
            selectedId={selectedGrave?.id ?? null}
            onClickGrave={handleClick}
          />

          {/* Right block */}
          <GraveBlock
            rows={RIGHT_BLOCK_ROWS}
            matchingIds={matchingIds}
            selectedId={selectedGrave?.id ?? null}
            onClickGrave={handleClick}
          />
        </div>
      </div>

      {/* ── Detail Sheet ──────────────────────────────────── */}
      <GraveDetailSheet
        grave={selectedGrave}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}

// ─── GraveBlock: renders one column of rows ──────────────────────────────────
function GraveBlock({
  rows,
  matchingIds,
  selectedId,
  onClickGrave,
}: {
  rows: GraveRecord[][];
  matchingIds: Set<string> | null;
  selectedId: string | null;
  onClickGrave: (g: GraveRecord) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {rows.map((row, rowIdx) => {
        // Spacer row (empty array = gap between groups in the image)
        if (row.length === 0) {
          return <div key={`gap-${rowIdx}`} className="h-4" />;
        }

        return (
          <div key={rowIdx} className="flex gap-1">
            {row.map((grave) => {
              const dimmed =
                matchingIds !== null && !matchingIds.has(grave.id);
              return (
                <div
                  key={grave.id}
                  className="transition-opacity duration-150"
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
                    isSelected={selectedId === grave.id}
                    onClick={onClickGrave}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
