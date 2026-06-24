import Link from 'next/link';
import './FoldButton.css';

interface FoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function FoldButton({ href, onClick, children, className = '', type = 'button', disabled }: FoldButtonProps) {
  const baseClass = `fold-btn ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  );
}
