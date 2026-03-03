"use client";

import { useState, useMemo } from "react";
import { CEMETERY_DATA, type GraveRecord } from "@/lib/cemetery-data";
import { GraveCard } from "./grave-card";
import { GraveDetailSheet } from "./grave-detail-sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TreePine, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = ["All", "A", "B", "C", "D"];

export function CemeteryMap() {
  const [selectedGrave, setSelectedGrave] = useState<GraveRecord | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("All");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CEMETERY_DATA.filter((g) => {
      const matchesSection =
        activeSection === "All" || g.section === activeSection;
      if (!q) return matchesSection;
      const matchesSearch =
        g.plotNumber.toLowerCase().includes(q) ||
        g.deceased?.fullName.toLowerCase().includes(q) ||
        g.deceased?.dateOfDeath.toLowerCase().includes(q);
      return matchesSection && matchesSearch;
    });
  }, [searchQuery, activeSection]);

  const stats = useMemo(() => {
    const total = CEMETERY_DATA.length;
    const occupied = CEMETERY_DATA.filter((g) => g.status === "occupied").length;
    const available = CEMETERY_DATA.filter(
      (g) => g.status === "available"
    ).length;
    const reserved = CEMETERY_DATA.filter((g) => g.status === "reserved").length;
    return { total, occupied, available, reserved };
  }, []);

  function handleGraveClick(grave: GraveRecord) {
    setSelectedGrave(grave);
    setSheetOpen(true);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-800">
                <TreePine className="h-4 w-4 text-stone-100" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground leading-none">
                  Serenity Grove
                </h1>
                <p className="text-[11px] text-muted-foreground leading-none mt-0.5">
                  Memorial Gardens
                </p>
              </div>
            </div>

            <div className="h-5 w-px bg-border mx-1 hidden sm:block" />

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or plot ID…"
                className="pl-9 h-9 text-sm bg-muted/50 border-border focus-visible:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="ml-auto hidden sm:flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Est. 1892
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: "Total Plots",
              value: stats.total,
              icon: MapPin,
              color: "text-stone-600",
              bg: "bg-stone-50 border-stone-200",
            },
            {
              label: "Occupied",
              value: stats.occupied,
              icon: Users,
              color: "text-stone-600",
              bg: "bg-stone-50 border-stone-200",
            },
            {
              label: "Available",
              value: stats.available,
              icon: TreePine,
              color: "text-emerald-600",
              bg: "bg-emerald-50 border-emerald-200",
            },
            {
              label: "Reserved",
              value: stats.reserved,
              icon: MapPin,
              color: "text-amber-600",
              bg: "bg-amber-50 border-amber-200",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-lg border p-3.5 flex items-center gap-3",
                stat.bg
              )}
            >
              <stat.icon className={cn("h-4 w-4 shrink-0", stat.color)} />
              <div>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                <p className={cn("text-lg font-semibold leading-none mt-0.5", stat.color)}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Section filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground font-medium">Section:</span>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-medium transition-all",
                  activeSection === s
                    ? "bg-stone-800 text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-stone-200 hover:text-stone-800"
                )}
              >
                {s === "All" ? "All Sections" : `Section ${s}`}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3">
            {[
              { color: "bg-stone-300", label: "Occupied" },
              { color: "bg-emerald-200", label: "Available" },
              { color: "bg-amber-200", label: "Reserved" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={cn("h-3 w-3 rounded-sm border", item.color)} />
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results count */}
        {searchQuery && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-normal">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </Badge>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Clear
            </button>
          </div>
        )}

        {/* Section dividers + Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <TreePine className="h-10 w-10 text-stone-300 mb-4" />
            <p className="text-stone-600 font-medium">No records found</p>
            <p className="text-sm text-stone-400 mt-1">
              Try searching by a different name or plot ID.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {(activeSection === "All" ? ["A", "B", "C", "D"] : [activeSection]).map(
              (section) => {
                const sectionGraves = filtered.filter(
                  (g) => g.section === section
                );
                if (sectionGraves.length === 0) return null;
                return (
                  <div key={section}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-stone-800 flex items-center justify-center">
                          <span className="text-[11px] font-bold text-white">
                            {section}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-stone-700">
                          Section {section}
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-xs text-muted-foreground">
                        {sectionGraves.filter((g) => g.status === "occupied").length} occupied
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                      {sectionGraves.map((grave) => (
                        <GraveCard
                          key={grave.id}
                          grave={grave}
                          onClick={handleGraveClick}
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground">
            Serenity Grove Memorial Gardens &mdash; Cemetery Management System &mdash; Records maintained with respect and care.
          </p>
        </div>
      </footer>

      {/* Detail Sheet */}
      <GraveDetailSheet
        grave={selectedGrave}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
