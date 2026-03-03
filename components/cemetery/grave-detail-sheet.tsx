"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { GraveRecord } from "@/lib/cemetery-data";

interface GraveDetailSheetProps {
  grave: GraveRecord | null;
  open: boolean;
  onClose: () => void;
}

// Vietnam national emblem as an inline SVG-free image — use the public domain emblem URL
const EMBLEM_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coat_of_arms_of_Vietnam.svg/200px-Coat_of_arms_of_Vietnam.svg.png";

interface RowProps {
  label: string;
  value: string;
  valueBold?: boolean;
}

function InfoRow({ label, value, valueBold = true }: RowProps) {
  return (
    <tr>
      <td className="py-1 pr-6 text-sm text-gray-700 whitespace-nowrap align-top w-1/2">
        {label}:
      </td>
      <td
        className={`py-1 text-sm text-right align-top ${
          valueBold ? "font-bold text-gray-900" : "text-gray-700"
        }`}
      >
        {value || "Chưa rõ"}
      </td>
    </tr>
  );
}

export function GraveDetailSheet({
  grave,
  open,
  onClose,
}: GraveDetailSheetProps) {
  if (!grave) return null;

  const d = grave.deceased;
  const isUnknown = grave.status === "unknown";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-sm w-full p-0 overflow-hidden rounded-lg border border-gray-200 shadow-xl"
        style={{ background: "#fff" }}
      >
        {/* Accessible title/description for screen readers */}
        <DialogTitle className="sr-only">
          {d ? d.fullName : `Mộ số ${grave.plotNumber}`}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Chi tiết thông tin liệt sĩ mộ số {grave.plotNumber}, khu{" "}
          {grave.block === "left" ? "A" : "B"}, hàng {grave.row}, mộ{" "}
          {grave.col}.
        </DialogDescription>

        {/* Emblem */}
        <div className="flex justify-center pt-6 pb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={EMBLEM_SRC}
            alt="Quốc huy Việt Nam"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
            crossOrigin="anonymous"
          />
        </div>

        {/* Info table */}
        <div className="px-8 pb-4">
          <table className="w-full border-collapse">
            <tbody>
              <InfoRow
                label="Liệt sĩ"
                value={
                  isUnknown
                    ? "Chưa rõ thông tin"
                    : d?.fullName ?? "Chưa rõ thông tin"
                }
              />
              <InfoRow label="Ngày sinh" value={d?.dateOfBirth ?? ""} />
              <InfoRow label="Quê quán" value={d?.hometown ?? ""} />
              <InfoRow label="Ngày nhập ngũ" value={d?.enlistmentDate ?? ""} />
              <InfoRow label="Chức vụ" value={d?.rank ?? ""} />
              <InfoRow label="Ngày hy sinh" value={d?.dateOfDeath ?? ""} />
              <InfoRow label="Nơi hy sinh" value={d?.deathPlace ?? ""} />
            </tbody>
          </table>
        </div>

        {/* Footer: plot coordinates */}
        <div className="border-t border-gray-200 px-8 py-3 bg-gray-50">
          <p className="text-sm text-center text-gray-700">
            Khu:{" "}
            <span className="font-bold">
              {grave.block === "left" ? "A" : "B"}
            </span>
            {"  "}Hàng số:{" "}
            <span className="font-bold">{grave.row}</span>
            {"  "}Mộ số:{" "}
            <span className="font-bold">{grave.col}</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
