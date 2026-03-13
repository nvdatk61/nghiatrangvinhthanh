'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { CEMETERY_DATA as cemeteryData, type Grave } from '@/lib/cemetery-data';


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
      <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-100 p-4 shadow-sm md:mb-8 md:p-6">
        <div className="mx-auto flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <img
              src="/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp"
              alt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh"
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <img
              src="/logo-thanh-nien-viet-nam.webp"
              alt="Logo Thanh niên Việt Nam"
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <img
              src="/huy_hieu_doi_TNTP_HCM.png"
              alt="Logo Đội Thiếu niên Tiền phong"
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <h1 className="text-left text-base font-bold uppercase tracking-wide text-red-800 sm:text-xl lg:text-3xl">
              Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh
            </h1>
          </div>

          <div className="w-full lg:max-w-md">
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
      <div>
        {/* Cemetery Grid */}
        <div className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-2 shadow-lg sm:p-4 md:p-6">
          <div
            className="relative overflow-hidden rounded-xl p-2 sm:p-3 md:p-4"
            style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* <div className="absolute left-[50%] top-0 bottom-0 w-64 bg-blue-200/50 -translate-x-1/2 border-x border-blue-300/50" /> */}
            <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(23, minmax(0, 1fr))',
              gridAutoRows: 'clamp(46px, 4.8vw, 90px)',
              gap: 'clamp(1px, 0.25vw, 4px)',
              width: '100%',
              padding: '0 2px'
            }}
            >
              {/* Giant central monument */}
              <div
                className="relative z-20 flex flex-col items-center justify-center"
                style={{ gridColumn: '13 / 16', gridRow: '1 / 3' }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative flex h-[clamp(72px,12vw,228px)] w-[clamp(40px,6.8vw,130px)] items-center justify-center overflow-visible shadow-2xl">
                    <div
                      className="absolute inset-0 border-2 border-rose-200 bg-gradient-to-b from-red-400 via-red-600 to-red-800"
                      style={{ clipPath: 'polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)' }}
                    />
                    <div
                      className="absolute left-[30%] right-[30%] top-[20%] bottom-[8%] border border-yellow-100 bg-gradient-to-b from-slate-700 to-slate-900"
                      style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
                    />

                    <div className="absolute top-[5%] h-[clamp(10px,1.8vw,28px)] w-[clamp(10px,1.8vw,28px)] rounded-full border border-red-700 bg-gradient-to-b from-red-300 to-red-600">
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-amber-400 p-[2px]">
                        <path d="M12 2.5l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.2 6.3 20.1l1.1-6.4-4.6-4.5 6.4-.9L12 2.5z" />
                      </svg>
                    </div>

                    <div className="absolute top-[31%] flex flex-col items-center gap-[clamp(1px,0.2vw,3px)] text-[clamp(5px,0.6vw,11px)] font-extrabold leading-none tracking-[0.02em] text-amber-200">
                      <span>TỔ</span>
                      <span>QUỐC</span>
                      <span>GHI</span>
                      <span>CÔNG</span>
                    </div>

                    <div
                      className="absolute -top-[16%] h-[clamp(12px,2.4vw,44px)] w-[clamp(12px,2.4vw,44px)] border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                    />
                    <div className="absolute -top-[32%] h-[clamp(14px,2.5vw,48px)] w-[2px] bg-slate-700" />
                    <svg
                      viewBox="0 0 60 40"
                      className="absolute -top-[36%] left-[54%] h-[clamp(8px,1.9vw,28px)] w-[clamp(14px,2.6vw,38px)]"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="flagRed" x1="0" x2="1">
                          <stop offset="0" stopColor="#f97373" />
                          <stop offset="1" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                      <path d="M2 2 C20 2, 28 9, 40 5 C46 3, 54 2, 58 4 L58 34 C42 30, 32 38, 18 35 C10 33, 6 33, 2 34 Z" fill="url(#flagRed)" />
                      <path d="M20 10l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-2.9-5.7 2.9 1.1-6.4-4.6-4.5 6.4-.9L20 10z" fill="#facc15" />
                    </svg>
                  </div>
                  <div className="h-[clamp(4px,1vw,16px)] w-[clamp(58px,8.5vw,146px)] bg-gradient-to-b from-stone-500 to-stone-700" />
                  <div className="h-[clamp(6px,1.3vw,22px)] w-[clamp(76px,11vw,198px)] rounded-b-sm bg-gradient-to-b from-stone-700 to-stone-900" />
                </div>
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
                      className="h-2.5 w-2.5 fill-amber-400 sm:h-3 sm:w-3"
                    >
                      <path d="M12 2.5l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.2 6.3 20.1l1.1-6.4-4.6-4.5 6.4-.9L12 2.5z" />
                    </svg>
                    <p className={`mt-1 break-words px-0.5 text-center font-bold leading-[1.1] text-amber-100 text-[clamp(6px,0.62vw,10px)] ${grave.name === 'Vô Danh' ? 'italic' : ''}`}>
                      {grave.name}
                    </p>
                    <div className="mt-auto w-full border-t border-slate-600 pt-1 text-center text-amber-100/70 text-[clamp(5px,0.52vw,8.5px)]">
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
      <div className="mt-8 text-center md:mt-12">
        <p className="text-slate-700 italic" style={{ fontFamily: 'serif' }}>
          "Tôn vinh những người đã ngã xuống vì nước nhân dân"
        </p>
      </div>
      </div>
    </div>
  );
}
