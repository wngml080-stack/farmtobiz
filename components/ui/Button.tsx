import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[var(--color-deep-green-700)] text-white hover:bg-[var(--color-deep-green-800)]',
    secondary: 'bg-[var(--color-navy-800)] text-white hover:bg-[var(--color-navy-900)]',
    outline: 'border-2 border-[var(--color-deep-green-700)] text-[var(--color-deep-green-700)] hover:bg-[var(--color-deep-green-700)] hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
