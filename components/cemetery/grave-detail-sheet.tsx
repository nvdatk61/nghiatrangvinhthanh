"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { GraveRecord } from "@/lib/cemetery-data";
import {
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  User,
  BookOpen,
  Heart,
  Globe,
  Clock,
  Flower2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GraveDetailSheetProps {
  grave: GraveRecord | null;
  open: boolean;
  onClose: () => void;
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-stone-100">
        <Icon className="h-3.5 w-3.5 text-stone-500" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
          {label}
        </p>
        <p className="text-sm text-stone-700 leading-snug mt-0.5">{value}</p>
      </div>
    </div>
  );
}

// Empty plot view for available / reserved
function EmptyPlotView({ grave }: { grave: GraveRecord }) {
  const isAvailable = grave.status === "available";
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center gap-4">
      <div
        className={cn(
          "h-20 w-20 rounded-full flex items-center justify-center",
          isAvailable ? "bg-emerald-50" : "bg-amber-50"
        )}
      >
        {isAvailable ? (
          <Flower2 className="h-9 w-9 text-emerald-300" strokeWidth={1.5} />
        ) : (
          <Clock className="h-9 w-9 text-amber-300" strokeWidth={1.5} />
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-700">
          Plot {grave.plotNumber}
        </h3>
        <p
          className={cn(
            "text-sm font-medium mt-1",
            isAvailable ? "text-emerald-600" : "text-amber-600"
          )}
        >
          {isAvailable ? "Available for Purchase" : "Reserved"}
        </p>
        <p className="text-xs text-stone-400 mt-3 leading-relaxed max-w-xs mx-auto">
          {isAvailable
            ? "This plot is currently unoccupied and available. Please contact the cemetery office for purchasing information."
            : "This plot has been reserved. No further details are available at this time."}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Badge
          variant="secondary"
          className="bg-stone-100 text-stone-600 text-xs"
        >
          Section {grave.section}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-stone-100 text-stone-600 text-xs"
        >
          {grave.plotNumber}
        </Badge>
      </div>
    </div>
  );
}

export function GraveDetailSheet({
  grave,
  open,
  onClose,
}: GraveDetailSheetProps) {
  if (!grave) return null;

  const { deceased } = grave;

  // Generate initials for avatar
  const initials = deceased?.fullName
    ? deceased.fullName
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
    : "—";

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md overflow-y-auto bg-white border-stone-200 p-6"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>
            {deceased ? `Grave Record — ${deceased.fullName}` : `Plot ${grave.plotNumber}`}
          </SheetTitle>
          <SheetDescription>
            {deceased
              ? `Full details for plot ${grave.plotNumber}`
              : `Status information for plot ${grave.plotNumber}`}
          </SheetDescription>
        </SheetHeader>

        {/* Non-occupied plots */}
        {!deceased ? (
          <EmptyPlotView grave={grave} />
        ) : (
          <>
            {/* Hero section */}
            <div className="flex flex-col items-center pt-4 pb-5 text-center">
              {/* Avatar circle */}
              <div className="relative mb-4">
                <div className="h-24 w-24 rounded-full bg-stone-200 flex items-center justify-center shadow-inner border-4 border-stone-100">
                  <span className="text-2xl font-light text-stone-500 select-none tracking-wide">
                    {initials}
                  </span>
                </div>
                {/* Cross badge */}
                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-stone-700 flex items-center justify-center shadow-sm ring-2 ring-white">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M3 12h18"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-stone-900 text-balance leading-tight">
                {deceased.fullName}
              </h2>
              <p className="mt-1.5 text-sm text-stone-500">
                {deceased.dateOfBirth} &mdash; {deceased.dateOfDeath}
              </p>

              <div className="mt-3 flex items-center flex-wrap justify-center gap-1.5">
                <Badge
                  variant="secondary"
                  className="bg-stone-100 text-stone-600 text-xs font-normal"
                >
                  Section {grave.section}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-stone-100 text-stone-600 text-xs font-normal"
                >
                  Plot {grave.plotNumber}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-stone-100 text-stone-600 text-xs font-normal"
                >
                  Age {deceased.age}
                </Badge>
              </div>
            </div>

            <Separator className="bg-stone-100" />

            {/* Epitaph */}
            <div className="py-5">
              <div className="rounded-lg bg-stone-50 border border-stone-100 px-4 py-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3" />
                  Epitaph
                </p>
                <p className="text-sm text-stone-600 italic leading-relaxed text-balance">
                  &ldquo;{deceased.epitaph}&rdquo;
                </p>
              </div>
            </div>

            {/* Personal details */}
            <div className="space-y-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                Personal Information
              </p>
              <InfoRow
                icon={CalendarDays}
                label="Date of Birth"
                value={deceased.dateOfBirth}
              />
              <InfoRow
                icon={CalendarDays}
                label="Date of Death"
                value={deceased.dateOfDeath}
              />
              {deceased.nationality && (
                <InfoRow
                  icon={Globe}
                  label="Nationality"
                  value={deceased.nationality}
                />
              )}
              {deceased.religion && (
                <InfoRow
                  icon={Heart}
                  label="Religion / Faith"
                  value={deceased.religion}
                />
              )}
              <InfoRow
                icon={MapPin}
                label="Plot Number"
                value={grave.plotNumber}
              />
            </div>

            <Separator className="bg-stone-100 my-5" />

            {/* Biography */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
                <User className="h-3 w-3" />
                Biography
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                {deceased.biography}
              </p>
            </div>

            <Separator className="bg-stone-100 my-5" />

            {/* Family contact */}
            <div className="space-y-3.5 pb-8">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                Family Contact
              </p>
              <div className="rounded-lg border border-stone-100 bg-stone-50 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-stone-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-stone-600">
                      {deceased.familyContact.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">
                      {deceased.familyContact.name}
                    </p>
                    <p className="text-xs text-stone-500">
                      {deceased.familyContact.relationship}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <a
                    href={`tel:${deceased.familyContact.phone}`}
                    className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-stone-900 transition-colors group"
                  >
                    <Phone className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-600" />
                    {deceased.familyContact.phone}
                  </a>
                  <a
                    href={`mailto:${deceased.familyContact.email}`}
                    className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-stone-900 transition-colors group"
                  >
                    <Mail className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-600" />
                    {deceased.familyContact.email}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
