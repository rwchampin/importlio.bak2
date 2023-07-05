 
import Image from 'next/image';
import { ProfileDropdown } from '@/components';
export default function AvatarBorder({ size, user }: { size: string, user: any }) {
  let width = '';
  let height = '';
  let px = 0;
  // Set the width and height based on the provided size prop
  switch (size) {
    case 'small':
      width = 'w-6';
      height = 'h-6';
      px = 6*6
      break;
    case 'med':
      width = 'w-8';
      height = 'h-8';
      px = 8*8
      break;
    case 'lg':
      width = 'w-10';
      height = 'h-10';
      px = 10*10
      break;
    case 'xl':
      width = 'w-12';
      height = 'h-12';
      px = 12*12
      break;
    case 'xxl':
      width = 'w-16';
      height = 'h-16';
      px = 16*16
      break;
    // Add more cases for other sizes if needed
    default:
      width = 'w-10';
      height = 'h-10';
      px = 10*10
      break;
  }

  return (
    <div className={`flex items-center gap-x-6`}>
      <div className={`object-cover rounded-full ring ring-gray-300 dark:ring-gray-600 ${width} ${height}`}>
        <Image
        className='rounded-full'
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
          alt=""
          width={px} // Set a fixed width for Next.js Image component
          height={px} // Set a fixed height for Next.js Image component
        />
      </div>
    </div>
  );
}
