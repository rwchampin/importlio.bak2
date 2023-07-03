interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}
export const Title = ({ children, className, size }: TitleProps) => {
  let fontClass = 'text-2xl';
  switch (size) {
    case 'small':
      fontClass = 'text-2xl';
      break;
    case 'medium':
      fontClass = 'text-3xl';
      break;
    case 'large':
      fontClass = 'text-4xl';
      break;
  }
  return (
    <div className={`${className} montserrat-black ${fontClass} font-bold text-gray-900`}>
      {children}
    </div>
  );
};
