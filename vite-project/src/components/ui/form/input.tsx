import React from 'react';
import { cn } from '../../../utils/cn';
import { FieldWrapper } from './field-wrapper';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
} & {
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      // <>
      //   <label>{label}</label>
      <FieldWrapper label={label}>
        {' '}
        <input
          ref={ref}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          type={type}
          {...props}
        />
      </FieldWrapper>

      // </>
    );
  },
);

export { Input };
