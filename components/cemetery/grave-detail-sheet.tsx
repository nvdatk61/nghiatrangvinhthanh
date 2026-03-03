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
import { CalendarDays, MapPin, Phone, Mail, HelpCircle } from "lucide-react";

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
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-slate-100">
        <Icon className="h-3.5 w-3.5 text-slate-400" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          {label}
        </p>
        <p className="text-sm text-slate-700 leading-snug mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export function GraveDetailSheet({ grave, open, onClose }: GraveDetailSheetProps) {
  if (!grave) return null;

  const { deceased } = grave;
  const isUnknown = grave.status === "unknown";

  // Build initials for avatar
  const initials = deceased?.fullName
    ? deceased.fullName
        .split(" ")
        .filter((w) => /\p{L}/u.test(w))
        .slice(-2)
        .map((w) => w[0].toUpperCase())
        .join("")
    : "?";

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-sm overflow-y-auto p-6"
        style={{ background: "#fff" }}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>
            {deceased ? deceased.fullName : `Mộ số ${grave.plotNumber}`}
          </SheetTitle>
          <SheetDescription>
            Chi tiết mộ số {grave.plotNumber}
          </SheetDescription>
        </SheetHeader>

        {/* Hero */}
        <div className="flex flex-col items-center pt-2 pb-5 text-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div
              className="h-20 w-20 rounded-full flex items-center justify-center border-4 border-sky-100 shadow-inner"
              style={{ background: isUnknown ? "#e0f2fe" : "#bae6fd" }}
            >
              {isUnknown ? (
                <HelpCircle className="h-9 w-9 text-sky-300" strokeWidth={1.5} />
              ) : (
                <span className="text-xl font-light text-sky-700 select-none tracking-wide">
                  {initials}
                </span>
              )}
            </div>
            {/* Cross badge */}
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center shadow ring-2 ring-white">
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-lg font-bold text-slate-900 text-balance leading-tight">
            {deceased?.fullName ?? "Liệt sĩ chưa rõ thông tin"}
          </h2>

          {/* Date of death */}
          {deceased?.dateOfDeath && (
            <p className="mt-1 text-sm text-slate-500">
              {deceased.dateOfBirth
                ? `${deceased.dateOfBirth} — ${deceased.dateOfDeath}`
                : `Hy sinh: ${deceased.dateOfDeath}`}
            </p>
          )}

          {/* Badges */}
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            <Badge variant="secondary" className="bg-sky-100 text-sky-700 text-xs font-normal border-sky-200">
              Mộ số {grave.plotNumber}
            </Badge>
            {grave.deceased?.rank && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs font-normal">
                {grave.deceased.rank}
              </Badge>
            )}
            {isUnknown && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-xs font-normal border-amber-200">
                Chưa rõ thông tin
              </Badge>
            )}
          </div>
        </div>

        <Separator className="bg-slate-100" />

        {/* Details */}
        <div className="py-5 space-y-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
            Thông tin cá nhân
          </p>

          {deceased?.dateOfDeath && (
            <InfoRow icon={CalendarDays} label="Ngày hy sinh" value={deceased.dateOfDeath} />
          )}
          {deceased?.dateOfBirth && deceased.dateOfBirth !== "" && (
            <InfoRow icon={CalendarDays} label="Ngày sinh" value={deceased.dateOfBirth} />
          )}
          <InfoRow icon={MapPin} label="Số mộ" value={grave.plotNumber} />
          {deceased?.hometown && (
            <InfoRow icon={MapPin} label="Quê quán" value={deceased.hometown} />
          )}
          {deceased?.unit && (
            <InfoRow icon={MapPin} label="Đơn vị" value={deceased.unit} />
          )}
        </div>

        {/* Biography / Epitaph */}
        {deceased?.epitaph && (
          <>
            <Separator className="bg-slate-100" />
            <div className="py-5">
              <div className="rounded-lg bg-slate-50 border border-slate-100 px-4 py-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Ghi chú
                </p>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;{deceased.epitaph}&rdquo;
                </p>
              </div>
            </div>
          </>
        )}

        {deceased?.biography && (
          <>
            <Separator className="bg-slate-100" />
            <div className="py-5 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Tiểu sử
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {deceased.biography}
              </p>
            </div>
          </>
        )}

        {/* Family contact */}
        {deceased?.familyContact && (
          <>
            <Separator className="bg-slate-100" />
            <div className="py-5 space-y-3 pb-8">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Thân nhân liên hệ
              </p>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-sky-600">
                      {deceased.familyContact.name.split(" ").slice(-2).map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {deceased.familyContact.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {deceased.familyContact.relationship}
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${deceased.familyContact.phone}`}
                  className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  <Phone className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600" />
                  {deceased.familyContact.phone}
                </a>
              </div>
            </div>
          </>
        )}

        {/* Fallback message for unknown soldiers with no extra info */}
        {!deceased?.biography && !deceased?.familyContact && (
          <div className="py-6 text-center">
            <p className="text-xs text-slate-400 leading-relaxed">
              Liệt sĩ đã hy sinh vì Tổ quốc.<br />
              Đời đời ghi nhớ công ơn các anh.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
