
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
// import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Input } from '@/components';


export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav >
     
      <div className="max-w-6xl px-6 mx-auto w-full">
        <div className="relative flex flex-row justify-between py-4 align-center w-full">
          <div className="flex items-center flex-1">
            <Link href="/"   aria-label="Logo">
              <Logo />
            </Link>
            {/* <nav className="hidden ml-6 space-x-2 lg:block">
            <Link href="/features">
                Features
              </Link>
              <Link href="/">
                Pricing
              </Link>
              <Link href="/ecommerce-tutorials">
                Blog
              </Link>
              <Link href="/about">
                About
              </Link>
              
              
            </nav> */}
          </div>
          <div className="flex justify-end flex-1 space-x-8 items-center">
            <Input.TextInput />
            <MagnifyingGlassIcon className="w-6 h-6" />
            {/* {user ? (
              <>
                <SignOutButton user={user} />
              </>
            ) : (
              <Link href="/signin">
                Sign in
              </Link>
            )} */}
          </div>
        </div>
        {/* <Breadcrumbs useDefaultStyle rootLabel="Home" /> */}
      </div>
    </nav>
  );
}
