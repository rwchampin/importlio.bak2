
// import SignOutButton from './SignOutButton';
import { SearchForm, Logo } from '@/components';
import Link from 'next/link';

import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

export default async function Navbar({ children }) {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);
  // const supabase = createServerSupabaseClient();
  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();
  debugger
  const links = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="w-full p-5 sticky flex justify-center items-center gap-5">
      <Link href="/" aria-label="Logo">
        <Logo width={40} />
      </Link>
      <ul className="flex pl-10 items-center justify-start flex-1 gap-5">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className="apercu-medium">{label}</Link>
          </li>
        ))}
      </ul>

          {children}
        <SearchForm />
        {/* {user ? (
              <>
                <SignOutButton user={user} />
              </>
            ) : (
              <Link href="/signin">
                Sign in
              </Link>
            )}  */}
    {/* <SignOutButton /> */}

    </nav>
  );
}
