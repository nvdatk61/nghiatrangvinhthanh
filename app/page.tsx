import Link from 'next/link';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061f8f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#31a7ff_0%,_#0e3ec7_42%,_#061f8f_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(transparent_95%,rgba(255,255,255,0.1)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_95%)] [background-size:64px_64px]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/35 bg-white/10 p-6 shadow-[0_0_80px_rgba(95,241,255,0.2)] backdrop-blur-md sm:p-10">
          <div className="mb-5 flex items-center justify-center gap-3">
            <img
              src="/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp"
              alt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh"
              className="h-12 w-12 rounded-full border border-white/40 bg-white/95 object-cover"
            />
            <img
              src="/logo-thanh-nien-viet-nam.webp"
              alt="Logo Thanh niên Việt Nam"
              className="h-12 w-12 rounded-full border border-white/40 bg-white/95 object-cover"
            />
            <img
              src="/huy_hieu_doi_TNTP_HCM.png"
              alt="Logo Đội Thiếu niên Tiền phong"
              className="h-12 w-12 rounded-full border border-white/40 bg-white/95 object-cover"
            />
          </div>

          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
            CTPV THANH NIÊN XÃ VĨNH THANH
          </p>
          <p className="mt-3 text-center text-base font-semibold leading-relaxed text-amber-100 sm:text-lg">
            Chào mừng bầu cử Đại biểu Quốc hội khóa XVI và Đại biểu HĐND các cấp nhiệm kỳ 2026 - 2031; chào mừng kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh (26/3/1931 - 26/3/2026).
          </p>

          <div className="mt-8 rounded-2xl border border-white/40 bg-white/10 p-4 text-center sm:p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh</h2>
            <p className="mt-2 text-sm text-cyan-50/90 sm:text-base">
              Tra cứu thông tin phần mộ và vị trí trực quan trên bản đồ nghĩa trang.
            </p>
            <Link
              href="/vinh-thanh"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:scale-[1.02] hover:bg-amber-300"
            >
              Vào xem nghĩa trang Vĩnh Thanh
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
