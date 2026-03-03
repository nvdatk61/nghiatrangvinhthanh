"use client";

import { useState, useMemo } from "react";
import { CEMETERY_DATA, type GraveRecord } from "@/lib/cemetery-data";
import { GraveCard } from "./grave-card";
import { GraveDetailSheet } from "./grave-detail-sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = ["A", "B", "C", "D"] as const;

// Section labels as they appear in the heading
const SECTION_LABELS: Record<string, string> = {
  A: "Section A — Garden of Rest",
  B: "Section B — Hillside Grounds",
  C: "Section C — Eastern Meadow",
  D: "Section D — North Field",
};

export function CemeteryMap() {
  const [selectedGrave, setSelectedGrave] = useState<GraveRecord | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CEMETERY_DATA.filter((g) => {
      const matchesSection =
        activeSection === "All" || g.section === activeSection;
      if (!q) return matchesSection;
      const matchesSearch =
        g.plotNumber.toLowerCase().includes(q) ||
        g.deceased?.fullName.toLowerCase().includes(q) ||
        g.id.toLowerCase().includes(q);
      return matchesSection && matchesSearch;
    });
  }, [searchQuery, activeSection]);

  const totalStats = useMemo(() => ({
    occupied: CEMETERY_DATA.filter((g) => g.status === "occupied").length,
    available: CEMETERY_DATA.filter((g) => g.status === "available").length,
    reserved: CEMETERY_DATA.filter((g) => g.status === "reserved").length,
  }), []);

  function handleGraveClick(grave: GraveRecord) {
    setSelectedGrave(grave);
    setSheetOpen(true);
  }

  const visibleSections =
    activeSection === "All" ? (SECTIONS as readonly string[]) : [activeSection];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ── Top navigation bar ───────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center gap-4">
            {/* Brand */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-stone-800">
                <TreePine className="h-4 w-4 text-stone-100" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">
                  Serenity Grove
                </p>
                <p className="text-[10px] text-muted-foreground leading-none mt-0.5">
                  Memorial Gardens
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-5 w-px bg-border" />

            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name or plot ID…"
                className="pl-8 h-8 text-xs bg-muted/40 border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Legend — right side of top bar */}
            <div className="ml-auto hidden sm:flex items-center gap-4">
              {[
                { dot: "bg-stone-300 border-stone-400", label: "Occupied" },
                { dot: "bg-emerald-200 border-emerald-400", label: "Available" },
                { dot: "bg-amber-200 border-amber-400", label: "Reserved" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "h-3 w-3 rounded-sm border",
                      item.dot
                    )}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Sub-bar: Section filter + stats ─────────────── */}
      <div className="border-b border-border bg-card/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-11 items-center justify-between gap-4">
            {/* Section filter buttons */}
            <div className="flex items-center gap-1.5">
              {["All", ...SECTIONS].map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  className={cn(
                    "rounded px-3 py-1 text-xs font-medium transition-all duration-100",
                    activeSection === s
                      ? "bg-stone-800 text-white shadow-sm"
                      : "text-muted-foreground hover:bg-stone-100 hover:text-stone-800"
                  )}
                >
                  {s === "All" ? "All Sections" : `Section ${s}`}
                </button>
              ))}
            </div>

            {/* Compact stats */}
            <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
              <span>
                <span className="font-semibold text-stone-700">{totalStats.occupied}</span> occupied
              </span>
              <span>
                <span className="font-semibold text-emerald-600">{totalStats.available}</span> available
              </span>
              <span>
                <span className="font-semibold text-amber-600">{totalStats.reserved}</span> reserved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main map area ────────────────────────────────── */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Search result badge */}
        {searchQuery && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-normal">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;
              {searchQuery}&rdquo;
            </Badge>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Clear
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <TreePine className="h-12 w-12 text-stone-200 mb-4" />
            <p className="text-stone-500 font-medium">No records found</p>
            <p className="text-sm text-stone-400 mt-1.5">
              Try searching by a different name or plot ID.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {visibleSections.map((section) => {
              const sectionGraves = filtered.filter(
                (g) => g.section === section
              );
              if (sectionGraves.length === 0) return null;

              const occupiedCount = sectionGraves.filter(
                (g) => g.status === "occupied"
              ).length;

              return (
                <section key={section} aria-label={`Section ${section}`}>
                  {/* Section heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2.5 shrink-0">
                      <div className="h-7 w-7 rounded bg-stone-800 flex items-center justify-center">
                        <span className="text-[11px] font-bold text-white tracking-wide">
                          {section}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-sm font-semibold text-stone-800 leading-none">
                          {SECTION_LABELS[section]}
                        </h2>
                        <p className="text-[10px] text-stone-400 mt-0.5">
                          {occupiedCount} occupied &middot; {sectionGraves.length} total plots shown
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Organic flexbox grid — wrapping rows */}
                  <div className="flex flex-wrap gap-2.5">
                    {sectionGraves.map((grave) => (
                      <div
                        key={grave.id}
                        className="w-[calc(50%-5px)] sm:w-[calc(33.333%-7px)] md:w-[calc(25%-8px)] lg:w-[calc(16.666%-9px)]"
                      >
                        <GraveCard
                          grave={grave}
                          isHighlighted={selectedGrave?.id === grave.id}
                          onClick={handleGraveClick}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-border py-5 mt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground">
            Serenity Grove Memorial Gardens &mdash; Cemetery Management System &mdash; Est. 1892
          </p>
        </div>
      </footer>

      {/* ── Detail Sheet ─────────────────────────────────── */}
      <GraveDetailSheet
        grave={selectedGrave}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
