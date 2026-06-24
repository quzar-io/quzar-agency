export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 border-t border-brand-border/50 pt-8 md:pt-12 pb-6 md:pb-8 mt-12 md:mt-24 flex flex-col">
      <div className="grid grid-cols-2 md:flex md:flex-row gap-x-4 gap-y-8 md:gap-12 text-[14px] tracking-[0.021em] font-normal text-brand-smoke w-full mb-12 md:mb-16">
        <div>
          <span className="text-white block mb-1.5 md:mb-2 uppercase tracking-[0.05em] font-semibold text-[12px]">OFFICE</span>
          LUCKNOW, IN
        </div>
        <div>
          <span className="text-white block mb-1.5 md:mb-2 uppercase tracking-[0.05em] font-semibold text-[12px]">CONTACT</span>
          HELLO@QUZAR.IN
        </div>
        <div>
          <span className="text-white block mb-1.5 md:mb-2 uppercase tracking-[0.05em] font-semibold text-[12px]">AVAILABILITY</span>
          Q1 2026 OPEN
        </div>
        <div>
          <span className="text-white block mb-1.5 md:mb-2 uppercase tracking-[0.05em] font-semibold text-[12px]">SOCIALS</span>
          <a href="https://instagram.com/quzarhq" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase">
            @quzarhq
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-brand-border/50 pt-6 md:pt-8 w-full gap-4">
        <div className="text-[14px] font-semibold text-white tracking-[0.05em] uppercase flex items-center gap-2">
          <div className="w-4 h-4 border border-brand-lichen transform rotate-45"></div>
          QUZAR
        </div>
        <div className="text-[12px] tracking-[0.05em] text-brand-smoke uppercase font-normal">
          &copy; {new Date().getFullYear()} Quzar Architects. Built with energy.
        </div>
      </div>
    </footer>
  );
}
