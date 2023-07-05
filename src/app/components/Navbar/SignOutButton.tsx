"use client";
import { ButtonPrimary, ButtonIcon, ButtonPrimaryAlt, ButtonSolid } from '@/components/ui/Button';

// import Avatar from '@/components/ui/avatar';
// import Popover from '@/components/ui/Popover';
import { useRouter } from 'next/navigation';

export default async function SignOutButton({ user }: any) {
  const router = useRouter();

  debugger
  const logout = async () => {
    // await supabase.auth.signOut();
    router.push('/signin');
  };

  const content = {
    dashboard: {
      title: 'Dashboard',
      linkType: 'href',
      href: '/dashboard'
    },
    'log out': {
      title: 'Log out',
      linkType: 'onClick',
      onClick: logout
    }
  };
  // {user && (
  //   <Link href="/account" className={s.link}>
  //     Account
  //   </Link>
  // )}
  return (

      
 <ButtonPrimary className="text-black">Log in</ButtonPrimary>
  //  <Popover content={content}>
  //    <Avatar user={user} />
  //  </Popover> 
  );
}
