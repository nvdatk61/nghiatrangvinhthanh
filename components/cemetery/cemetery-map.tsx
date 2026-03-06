'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CEMETERY_DATA } from '@/lib/cemetery-data';
import { GraveCard } from './grave-card';
import { GraveDetailModal } from './grave-detail-modal';
import type { Grave } from '@/lib/cemetery-data';

export function CemeteryMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter graves based on search query
  const filteredGraves = useMemo(() => {
    if (!searchQuery.trim()) return CEMETERY_DATA;
    
    const query = searchQuery.toLowerCase();
    return CEMETERY_DATA.filter(grave => 
      grave.name.toLowerCase().includes(query) ||
      grave.hometown.toLowerCase().includes(query) ||
      grave.birthYear.toLowerCase().includes(query) ||
      grave.deathYear.toLowerCase().includes(query) ||
      grave.id.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Calculate max row for dynamic grid height
  const maxRow = Math.max(...CEMETERY_DATA.map(g => g.row));

  const handleGraveClick = (grave: Grave) => {
    setSelectedGrave(grave);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh
        </h1>
        <p className="text-slate-600">Lưu giữ ký ức các anh hùng liệt sĩ</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, quê quán, năm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-white shadow-sm"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Hiển thị {filteredGraves.length} / {CEMETERY_DATA.length} mộ
        </p>
      </div>

      {/* Color Legend */}
      <div className="mb-8 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded border border-slate-600"></div>
          <span className="text-slate-700">Mộ liệt sĩ</span>
        </div>
      </div>

      {/* Map Container with scroll */}
      <div className="overflow-auto bg-white rounded-lg shadow-lg p-6 border border-slate-200">
        {/* Cemetery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(23, minmax(80px, 80px))',
            gridAutoRows: '90px',
            gap: '4px',
            minWidth: 'max-content',
          }}
        >
          {/* Center aisle visual element */}
          <div
            style={{
              gridColumn: '13 / 16',
              gridRow: `1 / ${maxRow + 1}`,
              borderLeft: '2px dashed rgba(148, 163, 184, 0.5)',
              borderRight: '2px dashed rgba(148, 163, 184, 0.5)',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          ></div>

          {/* Grave cards */}
          {CEMETERY_DATA.map((grave) => {
            const isFiltered = !filteredGraves.includes(grave);
            return (
              <div
                key={grave.id}
                style={{
                  gridColumn: grave.col,
                  gridRow: grave.row,
                  opacity: isFiltered ? 0.25 : 1,
                  transition: 'opacity 0.2s ease-in-out',
                }}
              >
                <GraveCard
                  grave={grave}
                  isSelected={selectedGrave?.id === grave.id}
                  onClick={() => handleGraveClick(grave)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <GraveDetailModal
        grave={selectedGrave}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-slate-500">
        <p>Tôn vinh những người đã ngã xuống vì nước nhân dân</p>
      </div>
    </div>
  );
}
