"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import type { Grave } from "@/lib/cemetery-data";

interface GraveDetailSheetProps {
  grave: Grave;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GraveDetailSheet({
  grave,
  open,
  onOpenChange,
}: GraveDetailSheetProps) {
  // Extract year from dates
  const birthYear = grave.birthDate === "không rõ" ? "không rõ" : grave.birthDate;
  const deathYear = grave.deathDate;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        {/* Vietnam Coat of Arms at top */}
        <div className="flex justify-center mb-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            className="text-yellow-500"
            fill="currentColor"
          >
            {/* Simplified Vietnam state emblem outline */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.1" />
            {/* Star */}
            <polygon
              points="50,20 58,40 80,40 65,52 72,75 50,62 28,75 35,52 20,40 42,40"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Close button */}
        <DialogClose asChild>
          <button
            className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Đóng"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </DialogClose>

        {/* Name heading */}
        <h2 className="text-center text-lg font-bold text-slate-800 mb-4">
          {grave.name}
        </h2>

        {/* Two-column info table */}
        <div className="space-y-3 text-sm">
          {/* Liệt sĩ (Name/Title) */}
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Liệt sĩ:</span>
            <span className="font-semibold text-slate-800">{grave.name}</span>
          </div>

          {/* Ngày sinh (Birth Year) */}
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Ngày sinh:</span>
            <span className="font-semibold text-slate-800">{birthYear}</span>
          </div>

          {/* Ngày hy sinh (Death Year) */}
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Ngày hy sinh:</span>
            <span className="font-semibold text-slate-800">{deathYear}</span>
          </div>

          {/* Grid position info */}
          <div className="border-t border-slate-200 pt-3 mt-3">
            <div className="flex justify-between text-xs text-slate-600">
              <span>Khu: {grave.col}</span>
              <span>Hàng số: {grave.row}</span>
              <span>Mộ số: {grave.id}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
