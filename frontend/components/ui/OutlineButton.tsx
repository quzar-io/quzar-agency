import Link from 'next/link';

interface OutlineButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function OutlineButton({ href, onClick, children, className = '', target, rel }: OutlineButtonProps) {
  const baseClass = `relative inline-flex items-center justify-center border border-white/20 bg-transparent text-white font-semibold px-6 py-3.5 uppercase tracking-widest text-[12px] hover:bg-white hover:text-black transition-colors ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick} target={target} rel={rel}>
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"></span>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"></span>
      {children}
    </button>
  );
}
