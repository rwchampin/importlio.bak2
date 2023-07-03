import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    // <nav classNameName={s.root}>
    //   <a href="#skip" classNameName="sr-only focus:not-sr-only">
    //     Skip to content
    //   </a>
    //   <div classNameName="max-w-6xl px-6 mx-auto w-full">
    //     <div classNameName="relative flex flex-row justify-between py-4 align-center w-full">
    //       <div classNameName="flex items-center flex-1">
    //         <Link href="/" classNameName={s.logo} aria-label="Logo">
    //           <Logo />
    //         </Link>
    //         <nav classNameName="hidden ml-6 space-x-2 lg:block">
    //         <Link href="/features" classNameName={s.link}>
    //             Features
    //           </Link>
    //           <Link href="/" classNameName={s.link}>
    //             Pricing
    //           </Link>
    //           <Link href="/ecommerce-tutorials" classNameName={s.link}>
    //             Blog
    //           </Link>
    //           <Link href="/about" classNameName={s.link}>
    //             About
    //           </Link>
              
              
    //         </nav>
    //       </div>
    //       <div classNameName="flex justify-end flex-1 space-x-8 items-center">
    //         <MagnifyingGlassIcon classNameName="w-6 h-6 text-gray-400" />
    //         {user ? (
    //           <>
    //             <SignOutButton user={user} />
    //           </>
    //         ) : (
    //           <Link href="/signin" classNameName={s.link}>
    //             Sign in
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //     {/* <Breadcrumbs useDefaultStyle rootLabel="Home" /> */}
    //   </div>
    // </nav>
    <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
            </a>


            <div className="flex lg:hidden">
                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg  className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show="isOpen" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>


        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                <a href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</a>
                <a href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</a>
                <a href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</a>
            </div>

            <div className="relative mt-4 md:mt-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
            </div>
        </div>
    </div>
</nav>
  );
}
