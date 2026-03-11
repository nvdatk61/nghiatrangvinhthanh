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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 p-6">
      {/* Solemn header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-3 font-serif">
          Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-4"></div>
        <p className="text-slate-600 italic text-lg">Lưu giữ ký ức các anh hùng liệt sĩ</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, quê quán, năm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white shadow-md"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Hiển thị {filteredGraves.length} / {CEMETERY_DATA.length} mộ
          </p>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-7xl mx-auto">
        {/* Central Monument Section */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-40 rounded-t-3xl bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl flex flex-col items-center justify-center relative border-4 border-amber-700">
            {/* Monument cross */}
            <div className="absolute top-4 text-4xl text-yellow-300">✦</div>
            <div className="text-center text-white mt-6">
              <p className="text-sm font-bold">KỶ NIỆM</p>
              <p className="text-xs mt-1">Các Anh Hùng</p>
              <p className="text-xs">Liệt Sĩ</p>
            </div>
          </div>
        </div>

        {/* Cemetery Grid with light background */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-4 border-blue-200">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(23, minmax(80px, 80px))',
              gridAutoRows: '90px',
              gap: '6px',
              minWidth: 'max-content',
            }}
          >
            {/* Center aisle visual element */}
            <div
              style={{
                gridColumn: '13 / 16',
                gridRow: `1 / ${maxRow + 1}`,
                borderLeft: '3px solid rgba(59, 130, 246, 0.3)',
                borderRight: '3px solid rgba(59, 130, 246, 0.3)',
                opacity: 0.6,
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
                    opacity: isFiltered ? 0.2 : 1,
                    transition: 'opacity 0.2s ease-in-out, filter 0.2s ease-in-out',
                    filter: isFiltered ? 'grayscale(100%)' : 'grayscale(0%)',
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
      </div>

      {/* Detail Modal */}
      <GraveDetailModal
        grave={selectedGrave}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      {/* Solemn footer */}
      <div className="mt-12 text-center">
        <p className="text-slate-700 italic font-serif">
          "Tôn vinh những người đã ngã xuống vì nước nhân dân"
        </p>
      </div>
    </div>
  );
}
