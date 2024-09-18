import clsx from 'clsx';

interface Props {
  label: string;
  variant?: 'raised' | 'default';
}

function Button({ label, variant = 'default' }: Props) {
  return (
    <button
      className={clsx('rounded px-4 py-2 font-bold', {
        'bg-blue-500 hover:bg-blue-700 text-white': variant === 'raised',
        'bg-gray-200 hover:bg-gray-400': variant === 'default',
      })}
    >
      {label}
    </button>
  );
}

export default Button;
