"use client"
// import SignOutButton from './SignOutButton';

import { SearchForm, Logo, AvatarBorder, ProfileDropdown, SimpleDropdown } from '@/components';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react'

import { ButtonPrimary, ButtonIcon, ButtonPrimaryAlt, ButtonSolid } from '@/components/ui/Button';

 

export default function Navbar() {
 
  const { data: session, status } = useSession()
  const handleClick = () => signIn()
  debugger
  const links = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog', children: [
      { href: '/post-1', label: 'Blog 1' },
      { href: '/post-2', label: 'Blog 2' },
      { href: '/post-3', label: 'Blog 3' },
      { href: '/post-4', label: 'Blog 4' },

    ] },
    { href: '/about', label: 'About' },

  ];


  return (
    <nav className="w-full p-5 sticky top-0 flex justify-center items-center gap-5">
      <Link href="/" aria-label="Logo">
        <Logo width={40} />
      </Link>
      <ul className="flex pl-10 items-center justify-start flex-1 gap-5">
        {links.map(({ href, label, children }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className="apercu-medium">{label}</Link>
          </li>
        ))}
      </ul>
       
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
          {session?.user ? (
            <ProfileDropdown signOut={signOut} user={session.user}>
            <AvatarBorder size={'xl'} user={session.user} />
          </ProfileDropdown>
          ) : (
            <div onClick={handleClick} className='btn btn-black'>
            Sign in
          </div>
          )}

    </nav>
  );
}
