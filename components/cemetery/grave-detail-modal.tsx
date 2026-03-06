'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { User, MapPin, X } from 'lucide-react';
import type { Grave } from '@/lib/cemetery-data';

interface GraveDetailModalProps {
  grave: Grave | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cleanDateText = (text: string | undefined): string => {
  if (!text) return 'Không rõ';
  return text.replace(/(Sinh|Mất|Năm)\s*/gi, '').trim() || 'Không rõ';
};

export function GraveDetailModal({ grave, open, onOpenChange }: GraveDetailModalProps) {
  if (!grave) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6">
        {/* Close button */}
        <DialogClose className="absolute right-4 top-4 p-1 hover:bg-slate-100 rounded-md transition-colors">
          <X className="h-5 w-5 text-slate-500" />
        </DialogClose>

        {/* Grave name and hometown badge */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{grave.name}</h2>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="w-4 h-4" />
            <span>Quê quán: <span className="font-semibold text-slate-800">{grave.hometown}</span></span>
          </div>
        </div>

        {/* Info rows */}
        <div className="space-y-4">
          {/* Birth date */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-3">
            <span className="text-sm font-medium text-slate-600">Ngày sinh</span>
            <span className="text-sm font-semibold text-slate-800 text-right">
              {cleanDateText(grave.fullBirth)}
            </span>
          </div>

          {/* Death date */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-3">
            <span className="text-sm font-medium text-slate-600">Ngày hy sinh</span>
            <span className="text-sm font-semibold text-slate-800 text-right">
              {cleanDateText(grave.fullDeath)}
            </span>
          </div>

          {/* Plot information */}
          <div className="bg-slate-50 rounded-md p-3 mt-4">
            <div className="text-xs text-slate-500 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="font-semibold text-slate-700">{grave.col}</div>
                <div>Cột</div>
              </div>
              <div>
                <div className="font-semibold text-slate-700">{grave.row}</div>
                <div>Hàng</div>
              </div>
              <div>
                <div className="font-semibold text-slate-700">{grave.id}</div>
                <div>ID</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
