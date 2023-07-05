import Image from 'next/image';

export default function AvatarStatusIcon({ size, user }: { size: string, user:any }) {
  let width = '';
  let height = '';

  // Set the width and height based on the provided size prop
  switch (size) {
    case 'small':
      width = 'w-6';
      height = 'h-6';
      break;
    case 'med':
      width = 'w-8';
      height = 'h-8';
      break;
    case 'lg':
      width = 'w-10';
      height = 'h-10';
      break;
    case 'xl':
      width = 'w-12';
      height = 'h-12';
      break;
    case 'xxl':
      width = 'w-16';
      height = 'h-16';
      break;
    // Add more cases for other sizes if needed
    default:
      width = 'w-10';
      height = 'h-10';
      break;
  }

  return (
    <div className={`flex items-center gap-x-6`}>
      <div className={`object-cover rounded-full ${width} ${height}`}>
        <div className="relative">
          <Image
            width={64}
            height={64}
            className={`object-cover ${width} ${height} rounded-full`}
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
            alt=""
          />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
        </div>
      </div>
    </div>
  );
}
