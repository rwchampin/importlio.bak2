'use client';

import s from './Navbar.module.css';
import { useSupabase } from '@/app/supabase-provider';
import Avatar from '@/components/ui/avatar';
// import Popover from '@/components/ui/Popover';
import { useRouter } from 'next/navigation';

export default function SignOutButton({ user }: any) {
  const router = useRouter();
  const { supabase } = useSupabase();

  const logout = async () => {
    await supabase.auth.signOut();
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
    <Popover content={content}>
      <Avatar user={user} />
    </Popover>
  );
}
