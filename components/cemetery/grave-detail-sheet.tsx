"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Grave } from "@/lib/cemetery-data";
import { X } from "lucide-react";

interface GraveDetailSheetProps {
  grave: Grave | null;
  sectionName?: string;
  open: boolean;
  onClose: () => void;
}

// Vietnam national emblem
const EMBLEM_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coat_of_arms_of_Vietnam.svg/200px-Coat_of_arms_of_Vietnam.svg.png";

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <tr>
      <td className="py-2 pr-6 text-sm text-gray-700 whitespace-nowrap align-top">
        {label}:
      </td>
      <td className="py-2 text-sm font-bold text-gray-900 text-right">
        {value || "Không rõ"}
      </td>
    </tr>
  );
}

export function GraveDetailSheet({
  grave,
  sectionName,
  open,
  onClose,
}: GraveDetailSheetProps) {
  if (!grave) return null;

  const isUnknown = grave.name.includes("Vô Danh") || grave.name.includes("Không tên");

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-sm w-full p-0 overflow-hidden rounded-lg border border-gray-200 shadow-xl"
        style={{ background: "#fff" }}
      >
        <DialogTitle className="sr-only">Chi tiết liệt sĩ</DialogTitle>
        <DialogDescription className="sr-only">
          Thông tin chi tiết của {grave.name}
        </DialogDescription>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Emblem */}
        <div className="flex justify-center pt-6 pb-4">
          <img src={EMBLEM_SRC} alt="Quốc huy Việt Nam" className="w-16 h-16" />
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {isUnknown ? (
            <div className="text-center py-4">
              <p className="text-sm text-gray-600 mb-2">Liệt sĩ chưa rõ thông tin</p>
              <p className="text-lg font-bold text-gray-800">{grave.name}</p>
              {sectionName && (
                <p className="text-xs text-gray-500 mt-2">Khu: {sectionName}</p>
              )}
            </div>
          ) : (
            <>
              {/* Name as heading */}
              <h2 className="text-center text-lg font-bold text-gray-900 mb-4">
                {grave.name}
              </h2>

              {/* Info table */}
              <table className="w-full">
                <tbody>
                  <InfoRow
                    label="Sinh"
                    value={grave.birthDate}
                  />
                  <InfoRow
                    label="Mất"
                    value={grave.deathDate}
                  />
                  {sectionName && (
                    <InfoRow
                      label="Khu"
                      value={sectionName}
                    />
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
