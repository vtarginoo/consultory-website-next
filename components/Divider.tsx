interface DividerProps {
  width?: string | number;
  color?: string;
  height?: string | number;
  className?: string;
}

export default function Divider({ 
  width = "100%", 
  color = "rgb(206, 156, 93)",
  height = "3px",
  className = "" 
}: DividerProps) {
  
  const widthValue = typeof width === "number" ? `${width}px` : width;
  const heightValue = typeof height === "number" ? `${height}px` : height;

  return (
    <div 
      className={`flex items-center justify-center overflow-hidden relative py-2.5 px-12 ${className}`}
      style={{ width: widthValue }}
    >
      <div 
        className="w-full"
        style={{ 
          backgroundColor: color,
          height: heightValue,
        }}
      />
    </div>
  );
}
