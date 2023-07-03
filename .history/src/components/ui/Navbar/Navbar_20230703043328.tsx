
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Input } from '@/components';
import Breadcrumbs from 'nextjs-breadcrumbs';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
     
      <div className="max-w-6xl px-6 mx-auto w-full">
        <div className="relative flex flex-row justify-between py-4 align-center w-full">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
            <Link href="/features" className={s.link}>
                Features
              </Link>
              <Link href="/" className={s.link}>
                Pricing
              </Link>
              <Link href="/ecommerce-tutorials" className={s.link}>
                Blog
              </Link>
              <Link href="/about" className={s.link}>
                About
              </Link>
              
              
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8 items-center">
            <Input.TextInput />
            <MagnifyingGlassIcon className="w-6 h-6" />
            {user ? (
              <>
                <SignOutButton user={user} />
              </>
            ) : (
              <Link href="/signin" className={s.link}>
                Sign in
              </Link>
            )}
          </div>
        </div>
        {/* <Breadcrumbs useDefaultStyle rootLabel="Home" /> */}
      </div>
    </nav>
  );
}
