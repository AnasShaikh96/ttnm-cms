type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
};

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, children } = props;

  return (
    <div>
      <label>
        {label}
        <div className="mt-1">{children}</div>
      </label>
    </div>
  );
};
