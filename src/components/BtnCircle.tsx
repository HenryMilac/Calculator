interface BtnCircleProps {
    value: string;
    onClick: () => void;
    color: string;
    spanTwoCols?: boolean;
  }
  
  export default function BtnCircle({ value, onClick, color, spanTwoCols = false }: BtnCircleProps) {
    return (
      <button
        onClick={onClick}
        className={`${color} ${spanTwoCols && 'col-span-2'} h-[60px] min-w-[60px] w-full rounded-full text-2xl flex items-center justify-center`}
      >
        {value}
      </button>
    );
  }
  