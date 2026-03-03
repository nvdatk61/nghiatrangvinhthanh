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
} from "lucide-react";

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
        <p className="text-[11px] font-medium uppercase tracking-wide text-stone-400">
          {label}
        </p>
        <p className="text-sm text-stone-700 leading-snug mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export function GraveDetailSheet({
  grave,
  open,
  onClose,
}: GraveDetailSheetProps) {
  if (!grave || !grave.deceased) return null;

  const { deceased } = grave;

  // Generate initials for avatar
  const initials = deceased.fullName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md overflow-y-auto bg-white border-stone-200"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Grave Record — {deceased.fullName}</SheetTitle>
          <SheetDescription>
            Full details for plot {grave.plotNumber}
          </SheetDescription>
        </SheetHeader>

        {/* Hero section */}
        <div className="flex flex-col items-center pt-6 pb-5 text-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center shadow-inner">
              <span className="text-2xl font-light text-stone-600 select-none">
                {initials}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-stone-500 flex items-center justify-center shadow-sm">
              <svg
                className="h-3 w-3 text-white"
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
          <p className="mt-1 text-sm text-stone-500 font-medium">
            {deceased.dateOfBirth} — {deceased.dateOfDeath}
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <Badge
              variant="secondary"
              className="bg-stone-100 text-stone-600 text-xs font-normal"
            >
              {grave.section} Section
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
        <div className="px-1 py-5">
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
        <div className="px-1 space-y-3.5">
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
          <InfoRow icon={MapPin} label="Plot Number" value={grave.plotNumber} />
        </div>

        <Separator className="bg-stone-100 my-5" />

        {/* Biography */}
        <div className="px-1 space-y-2.5">
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
        <div className="px-1 space-y-3.5 pb-8">
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
            <div className="space-y-2">
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
      </SheetContent>
    </Sheet>
  );
}
