interface SubtitleProps {
    children: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
  }
  export const Subtitle = ({ children, className, size }: SubtitleProps) => {
    let fontClass = 'text-1xl';
    switch (size) {
      case 'small':
        fontClass = 'text-1xl';
        break;
      case 'medium':
        fontClass = 'text-2xl';
        break;
      case 'large':
        fontClass = 'text-3xl';
        break;
    }
    return (
      <div className={`${className} montserrat ${fontClass} font-medium text-gray-400`}>
        {children}
      </div>
    );
  };
  