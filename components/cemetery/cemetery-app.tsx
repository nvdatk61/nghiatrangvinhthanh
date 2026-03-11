'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { CEMETERY_DATA as cemeteryData, type Grave } from '@/lib/cemetery-data';


export default function CemeteryApp() {
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const cleanDateText = (text: string) => text && text !== 'Không rõ' ? text.replace(/(Sinh|Mất|Năm)\s*/gi, '').trim() || 'Không rõ' : 'Không rõ';

  const filteredData = searchTerm
    ? cemeteryData.filter(g =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.hometown.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.birthYear.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.deathYear.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cemeteryData;

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8 md:mb-10 rounded-2xl border border-blue-200 bg-white p-4 md:p-6 shadow-sm">
        <div className="mx-auto flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp"
              alt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            />
            <img
              src="/logo-thanh-nien-viet-nam.webp"
              alt="Logo Thanh niên Việt Nam"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            />
            <img
              src="/Huy_hiệu_Đội_TNTP_Hồ_Chí_Minh.png"
              alt="Logo Đội Thiếu niên Tiền phong"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            />
            <h1 className="text-left text-lg font-bold uppercase tracking-wide text-red-800 sm:text-xl md:text-3xl">
              Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh
            </h1>
          </div>

          <div className="w-full md:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, quê quán, năm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="mt-2 text-center text-xs text-slate-500 md:text-left">
              Hiển thị {filteredData.length} / {cemeteryData.length} mộ
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Cemetery Grid */}
        <div className="overflow-auto rounded-2xl border-2 border-blue-200 bg-white p-4 shadow-lg md:p-6">
          <div className="bg-blue-100 min-w-max relative overflow-hidden rounded-xl p-3 md:p-4">
            {/* <div className="absolute left-[50%] top-0 bottom-0 w-64 bg-blue-200/50 -translate-x-1/2 border-x border-blue-300/50" /> */}
            <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(23, minmax(80px, 80px))',
              gridAutoRows: '90px',
              gap: '4px',
              minWidth: 'max-content',
              padding: '0 4px'
            }}
            >
              {/* Giant central monument */}
              <div
                className="relative z-20 flex flex-col items-center justify-center"
                style={{ gridColumn: '13 / 16', gridRow: '1 / 3' }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-24 h-44 bg-gradient-to-t from-stone-400 to-stone-200 shadow-xl border-2 border-stone-400">
                    {/* <svg viewBox="0 0 24 24" className="absolute -top-4 h-8 w-8 fill-yellow-300 text-yellow-300">
                      <path d="M12 2l2.9 6.1 6.7 1-4.9 4.8 1.2 6.8L12 17.7 6.1 20.7l1.2-6.8-4.9-4.8 6.7-1L12 2z" />
                    </svg> */}
                    <span
                      className="text-red-700 writing-vertical-rl tracking-[0.2em] font-bold text-sm"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      Đài Tưởng Niệm
                    </span>
                  </div>
                  <div className="w-32 h-4 bg-stone-500" />
                  <div className="w-44 h-5 bg-stone-600" />
                </div>
              </div>

              {/* Grave tiles */}
              {filteredData.map((grave) => {
                return (
                  <button
                    key={grave.id}
                    onClick={() => setSelectedGrave(grave)}
                    style={{
                      gridColumn: grave.col,
                      gridRow: grave.row,
                    }}
                    className="bg-slate-700 text-white rounded-t-2xl rounded-b-sm border border-slate-500 border-b-4 flex flex-col items-center p-1.5 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all h-full w-full"
                  >
                    <div className="w-2 h-2 bg-amber-500/60 rounded-full" />
                    <p className={`text-[10px] leading-[1.15] font-bold text-amber-100 break-words whitespace-normal px-0.5 text-center mt-1 ${grave.name === 'Vô Danh' ? 'italic' : ''}`}>
                      {grave.name}
                    </p>
                    <div className="text-[8.5px] text-amber-100/70 border-t border-slate-600 mt-auto pt-1 w-full text-center">
                      {grave.birthYear} - {grave.deathYear}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedGrave && (
        <>
          <div
            className="fixed inset-0 z-40 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setSelectedGrave(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md overflow-hidden rounded-xl bg-[#fcfbf9] shadow-2xl relative">
              <div className="bg-red-900 border-b-4 border-amber-600 px-5 py-4 pr-12 text-white">
                <p className="text-lg font-bold uppercase tracking-wide">Chi tiết phần mộ</p>
                <p className="text-xs text-red-100 mt-1">Hàng {selectedGrave.row}, Cột {selectedGrave.col}</p>
              </div>

              <button
                onClick={() => setSelectedGrave(null)}
                className="absolute right-3 top-3 p-1 rounded-md text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-stone-200 border border-stone-300" />
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{selectedGrave.name}</h2>
                    <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 mt-1">
                      Quê quán: {selectedGrave.hometown}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-slate-600">Ngày sinh</span>
                    <span className="text-sm font-semibold text-slate-800 text-right">
                      {cleanDateText(selectedGrave.fullBirth)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-slate-600">Ngày hy sinh</span>
                    <span className="text-sm font-semibold text-slate-800 text-right">
                      {cleanDateText(selectedGrave.fullDeath)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-3 text-xs text-slate-600">
                  Mã phần mộ: <span className="font-semibold text-slate-800">{selectedGrave.id}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-slate-700 italic" style={{ fontFamily: 'serif' }}>
          "Tôn vinh những người đã ngã xuống vì nước nhân dân"
        </p>
      </div>
    </div>
  );
}
