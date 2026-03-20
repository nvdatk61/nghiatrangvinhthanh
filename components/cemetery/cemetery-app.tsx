'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { CEMETERY_DATA as cemeteryData, type Grave } from '@/lib/cemetery-data';
import { IncenseOffering } from './incense-offering';
import { BackgroundMusic } from './background-music';


export default function CemeteryApp() {
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const cleanDateText = (text: string) => text && text !== 'Không rõ' ? text.replace(/(Sinh|Mất|Năm)\s*/gi, '').trim() || 'Không rõ' : 'Không rõ';

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const isGraveMatch = (grave: Grave) =>
    grave.name.toLowerCase().includes(normalizedSearchTerm) ||
    grave.hometown.toLowerCase().includes(normalizedSearchTerm) ||
    grave.birthYear.toLowerCase().includes(normalizedSearchTerm) ||
    grave.deathYear.toLowerCase().includes(normalizedSearchTerm);

  const filteredData = normalizedSearchTerm
    ? cemeteryData.filter(isGraveMatch)
    : cemeteryData;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt="Background"
          className="h-full w-full scale-105 object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-slate-900/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1920px] p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 rounded-2xl border border-blue-200 bg-blue-100 p-4 shadow-sm md:p-6">
        <div className="mx-auto grid w-full gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          {/* Logo bên trái */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center gap-2">
              <img
                src="/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp"
                alt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
              <img
                src="/logo-thanh-nien-viet-nam.webp"
                alt="Logo Thanh niên Việt Nam"
                className="h-10 w-10 rounded-full object-contain sm:h-12 sm:w-12"
              />
              <img
                src="/huy_hieu_doi_TNTP_HCM.png"
                alt="Logo Đội Thiếu niên Tiền phong"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>
            <p className="mt-1 w-full text-center text-xs font-semibold uppercase tracking-wide text-red-700 sm:text-sm">
              Xã Vĩnh Thanh
            </p>
          </div>

          {/* Tiêu đề ở giữa */}
          <h1 className="text-center text-lg font-bold uppercase tracking-wide text-red-800 sm:text-2xl lg:text-3xl">
            Bản Đồ Số Hóa Nghĩa Trang Liệt Sĩ <span className="whitespace-nowrap">Xã Vĩnh Thanh</span>
          </h1>

          {/* Tiêu ngữ bên phải */}
          <div className="w-full max-w-sm relative overflow-hidden rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 p-3 shadow-lg lg:p-4">
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-red-100/50" />
            <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full bg-amber-100/50" />
            
            <div className="relative text-center">
              
              {/* Title */}
              <p className="text-sm font-bold uppercase tracking-wide text-red-800">
                Đoàn TNCS Hồ Chí Minh <span className="whitespace-nowrap">xã Vĩnh Thanh</span>
              </p>
              
              {/* Star */}
              <span className="text-lg text-amber-500">★</span>
              
              {/* Content */}
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                <span className="font-semibold text-red-700">Công trình phần việc thanh niên</span>
                <br />
                Chào mừng kỷ niệm <span className="font-bold text-red-800">95 năm</span> ngày thành lập Đoàn TNCS Hồ Chí Minh
                <br />
                <span className="text-amber-700">(26/3/1931 - 26/3/2026)</span>
              </p>
              
              {/* Second paragraph */}
              <p className="mt-3 text-xs leading-relaxed text-slate-700">
                Chào mừng thành công của bầu cử Đại biểu Quốc hội khóa XVI và Đại biểu HĐND các cấp nhiệm kỳ 2026 - 2031
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm md:mb-8 md:p-4">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Search className="h-4 w-4" />
            <span>Tra cứu thông tin liệt sĩ</span>
          </div>
          <div className="w-full sm:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Nhập tên, quê quán, năm sinh/mất..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            {filteredData.length} / {cemeteryData.length} phần mộ
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Cemetery Grid */}
        <div className="overflow-x-auto rounded-2xl border-2 border-blue-200 bg-white p-2 shadow-lg sm:p-4 md:overflow-hidden md:p-6">
          <div
            className="relative min-w-[900px] overflow-hidden rounded-xl bg-blue-100 p-2 sm:p-3 md:min-w-0 md:p-4"
          >
            {/* <div className="absolute left-[50%] top-0 bottom-0 w-64 bg-blue-200/50 -translate-x-1/2 border-x border-blue-300/50" /> */}
            <div
              className="grid w-full grid-cols-[repeat(23,minmax(0,1fr))] gap-[3px] p-[0_2px] md:gap-[clamp(1px,0.25vw,4px)]"
              style={{
                gridAutoRows: 'clamp(55px, 4.8vw, 90px)',
              }}
            >
              {/* Giant central monument */}
              <div
                className="relative z-20 flex items-center justify-center"
                style={{ gridColumn: '13 / 16', gridRow: '2 / 3' }}
              >
                <img
                  src="/monument.svg"
                  alt="Đài tưởng niệm - Tổ Quốc Ghi Công"
                  className="h-[clamp(100px,16vw,280px)] w-auto drop-shadow-xl"
                />
              </div>

              {/* Grave tiles */}
              {cemeteryData.map((grave) => {
                const isMatch = !normalizedSearchTerm || isGraveMatch(grave);
                return (
                  <button
                    key={grave.id}
                    onClick={() => setSelectedGrave(grave)}
                    style={{
                      gridColumn: grave.col,
                      gridRow: grave.row,
                    }}
                    className={`bg-slate-700 text-white rounded-t-xl rounded-b-sm border border-slate-500 border-b-4 flex h-full w-full cursor-pointer flex-col items-center p-1 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:rounded-t-2xl sm:p-1.5 ${isMatch ? 'opacity-100' : 'opacity-30'}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-2.5 w-2.5 flex-shrink-0 fill-amber-400 sm:h-3 sm:w-3"
                    >
                      <path d="M12 2.5l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.2 6.3 20.1l1.1-6.4-4.6-4.5 6.4-.9L12 2.5z" />
                    </svg>
                    <p className={`flex-1 overflow-hidden px-0.5 text-center font-bold leading-[1.1] text-amber-100 text-[clamp(5px,0.52vw,9px)] ${grave.name === 'Vô Danh' ? 'italic' : ''}`}>
                      {grave.name}
                    </p>
                    <div className="mt-auto w-full flex-shrink-0 border-t border-slate-600 pt-1 text-center text-amber-100/70 text-[clamp(4px,0.45vw,7.5px)]">
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

                {/* Thắp Hương */}
                <IncenseOffering graveId={selectedGrave.id} graveName={selectedGrave.name} />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="mt-8 text-center md:mt-12">
        <p className="text-slate-700 italic" style={{ fontFamily: 'serif' }}>
          "Tôn vinh những người đã ngã xuống vì nước nhân dân"
        </p>
      </div>
      </div>

      {/* Nhạc nền tưởng niệm */}
      <BackgroundMusic />
    </div>
  );
}
