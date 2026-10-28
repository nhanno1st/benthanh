import type { ReactNode } from 'react';

interface Props {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export default function FormField({ label, htmlFor, error, required, children }: Props) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  'w-full rounded-sm border-0 bg-surface px-4 py-3.5 text-ink ring-1 ring-inset ring-line transition placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-brand';
