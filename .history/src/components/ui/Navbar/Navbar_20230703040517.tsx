
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
 

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
   <>
     <nav className="border-b border-slate-100 dark:bg-zinc-800 print:hidden flex items-center fixed top-0 right-0 left-0 bg-white z-10 dark:border-zinc-700">

<div className="flex items-center justify-between w-full">
    <div className="topbar-brand flex items-center">
        <div className="navbar-brand flex items-center justify-between shrink px-5 h-[70px] border-r bg-slate-50 border-r-gray-50 dark:border-zinc-700 dark:bg-zinc-800">
            <a href="#" className="flex items-center font-bold text-lg  dark:text-white">
                <img src="assets/images/logo-sm.svg" alt="" className="ltr:mr-2 rtl:ml-2 inline-block mt-1 h-6" />
                <span className="hidden xl:block align-middle">Minia</span>
            </a>
        </div>
        <button type="button" className="text-gray-600 dark:text-white h-[70px] ltr:-ml-10 ltr:mr-6 rtl:-mr-10 rtl:ml-10 vertical-menu-btn" id="vertical-menu-btn">
            <i className="fa fa-fw fa-bars"></i>
        </button>
        <form className="app-search hidden xl:block px-5">
            <div className="relative inline-block">
                <input type="text" className="bg-gray-50/30 dark:bg-zinc-700/50 border-0 rounded focus:ring-0 placeholder:text-sm px-4 dark:placeholder:text-gray-200 dark:text-gray-100 dark:border-zinc-700 " placeholder="Search..." />
                <button className="py-1.5 px-2.5 text-white bg-violet-500 inline-block absolute ltr:right-1 top-1 rounded shadow shadow-violet-100 dark:shadow-gray-900 rtl:left-1 rtl:right-auto" type="button"><i className="bx bx-search-alt align-middle"></i></button>
            </div>
        </form>
    </div>
    <div className="flex items-center">

        <div>
            <div className="dropdown relative sm:hidden block">
                <button type="button" className="text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 dropdown-toggle" data-dropdown-toggle="navNotifications">
                    <i data-feather="search" className="h-5 w-5"></i>
                </button>
                
                <div className="dropdown-menu absolute px-4 -left-36 top-0 mx-4 w-72 z-50 hidden list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" id="navNotifications">
                    <form className="py-3 dropdown-item" aria-labelledby="navNotifications">
                        <div className="form-group m-0">
                            <div className="flex w-full">
                                <input type="text" className="border-gray-100 dark:border-zinc-600 dark:text-zinc-100 w-fit" placeholder="Search ..." aria-label="Search Result" />
                                <button className="btn btn-primary border-l-0 rounded-l-none bg-violet-500 border-transparent text-white" type="submit"><i className="mdi mdi-magnify"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="dropdown relative language hidden sm:block">
            <button className="btn border-0 py-0 dropdown-toggle px-4 h-[70px]" type="button" aria-expanded="false" data-dropdown-toggle="navNotifications">
                <img src="assets/images/flags/us.jpg" alt="" className="h-4" id="header-lang-img">
            </button>
            <div className="dropdown-menu absolute -left-24 z-50 hidden w-40 list-none rounded bg-white shadow dark:bg-zinc-800" id="navNotifications">
                <ul className="border border-gray-50 dark:border-gray-700" aria-labelledby="navNotifications">
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"><img src="assets/images/flags/us.jpg" alt="user-image" className="mr-1 inline-block h-3"> <span className="align-middle">English</span></a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"><img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-1 inline-block h-3"> <span className="align-middle">Spanish</span></a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"><img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-1 inline-block h-3"> <span className="align-middle">German</span></a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"><img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-1 inline-block h-3"> <span className="align-middle">Italian</span></a>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <button type="button" className="light-dark-mode text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 hidden sm:block ">
                <i data-feather="moon" className="h-5 w-5 block dark:hidden"></i>
                <i data-feather="sun" className="h-5 w-5 hidden dark:block"></i>
        </div>

        <div>
            <div className="dropdown relative text-gray-600 hidden sm:block">
                <button type="button" className="btn border-0 h-[70px] text-xl px-4 dropdown-toggle dark:text-gray-100" data-bs-toggle="dropdown" id="dropdownMenuButton1">
                     <i data-feather="grid" className="h-5 w-5"></i>
                </button>
                <div className="dropdown-menu absolute -left-40 z-50 hidden w-72 list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" aria-labelledby="dropdownMenuButton1">
                    <div className="p-2">
                        <div className="grid grid-cols-3">
                            <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/github.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>GitHub</span>
                            </a>
                                <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/bitbucket.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>Bitbucket</span>
                            </a>
                                <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/dribbble.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>Dribbble</span>
                            </a>
                        </div>
                            <div className="grid grid-cols-3">
                            <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/dropbox.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>Dropbox</span>
                            </a>
                                <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/mail_chimp.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>Mail Chimp</span>
                            </a>
                                <a className="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                <img src="assets/images/brands/slack.png" className="mb-2 mx-auto h-6" alt="Github">
                                <span>Slack</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="dropdown relative ">
                <div className="relative">
                    <button type="button" className="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-100" aria-expanded="false" data-dropdown-toggle="notification">
                        <i data-feather="bell" className="h-5 w-5"></i>
                    </button>
                        <span className="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-2.5">5</span>
                </div>
                <div className="dropdown-menu absolute z-50 hidden w-80 list-none rounded bg-white shadow dark:bg-zinc-800 " id="notification">
                    <div className="border border-gray-50 dark:border-gray-700 rounded" aria-labelledby="notification">
                        <div className="grid grid-cols-12 p-4">
                            <div className="col-span-6">
                                <h6 className="m-0 text-gray-700 dark:text-gray-100"> Notifications </h6>
                            </div>
                            <div className="col-span-6 justify-self-end">
                                <a href="#!" className="text-xs underline dark:text-gray-400"> Unread (3)</a>
                            </div>
                        </div>
                        <div className="max-h-56" data-simplebar>
                            <div>
                                <a href="#!" className="text-reset notification-item">
                                    <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                        <div className="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                            <img src="assets/images/users/avatar-3.jpg" className="rounded-full h-8 w-8" alt="user-pic">
                                        </div>
                                        <div className="flex-grow">
                                            <h6 className="mb-1 text-gray-700 dark:text-gray-100">James Lemire</h6>
                                            <div className="text-13 text-gray-600">
                                                <p className="mb-1 dark:text-gray-400">It will seem like simplified English.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline dark:text-gray-400"></i> <span>1 hour ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" className="text-reset notification-item">
                                    <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                        <div className="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                            <div className="h-8 w-8 bg-violet-500 rounded-full text-center">
                                                <i className="bx bx-cart text-xl leading-relaxed text-white"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h6 className="mb-1 text-gray-700 dark:text-gray-100">Your order is placed</h6>
                                            <div className="text-13 text-gray-600">
                                                <p className="mb-1 dark:text-gray-400">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline dark:text-gray-400"></i> <span>3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" className="text-reset notification-item">
                                    <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                        <div className="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                            <div className="h-8 w-8 bg-green-500 rounded-full text-center">
                                                <i className="bx bx-badge-check text-xl leading-relaxed text-white"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h6 className="mb-1 text-gray-700 dark:text-gray-100">Your item is shipped</h6>
                                            <div className="text-13 text-gray-600">
                                                <p className="mb-1 dark:text-gray-400">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline dark:text-gray-400"></i> <span>3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" className="text-reset notification-item">
                                    <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                        <div className="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                            <img src="assets/images/users/avatar-6.jpg" className="rounded-full h-8 w-8" alt="user-pic">
                                        </div>
                                        <div className="flex-grow">
                                            <h6 className="mb-1 text-gray-700 dark:text-gray-100">Salena Layfield</h6>
                                            <div className="text-13 text-gray-600">
                                                <p className="mb-1 dark:text-gray-400">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline dark:text-gray-400"></i> <span>1 hour ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-1 border-t grid border-gray-50 dark:border-zinc-600 justify-items-center">
                            <a className="btn border-0 text-violet-500" href="javascript:void(0)">
                                <i className="mdi mdi-arrow-right-circle mr-1"></i> <span>View More..</span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className="dropdown relative ltr:mr-4 rtl:ml-4">
                <button type="button" className="flex items-center px-4 py-5 border-x border-gray-50 bg-gray-50/30 dropdown-toggle dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img className="h-8 w-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2" src="assets/images/users/avatar-1.jpg" alt="Header Avatar">
                    <span className="fw-medium hidden xl:block">Shawn L.</span>
                    <i className="mdi mdi-chevron-down align-bottom hidden xl:block"></i>
                </button>
                <div className="dropdown-menu absolute top-0 ltr:-left-3 rtl:-right-3 z-50 hidden w-40 list-none rounded bg-white shadow dark:bg-zinc-800" id="profile/log">
                    <div className="border border-gray-50 dark:border-zinc-600" aria-labelledby="navNotifications">
                        <div className="dropdown-item dark:text-gray-100">
                            <a className="px-3 py-2 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50" href="apps-contacts-profile.html">
                                <i className="mdi mdi-face-man text-16 align-middle mr-1"></i> Profile
                            </a>
                        </div>
                        <div className="dropdown-item dark:text-gray-100">
                            <a className="px-3 py-2 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50" href="lock-screen.html">
                                <i className="mdi mdi-lock text-16 align-middle mr-1"></i> Lock Screen
                            </a>
                        </div>
                        <hr className="border-gray-50 dark:border-gray-700">
                        <div className="dropdown-item dark:text-gray-100">
                            <a className="p-3 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50" href="logout.html">
                                <i className="mdi mdi-logout text-16 align-middle mr-1"></i> Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</nav>

    <div className="hidden">
        <div className="fixed inset-0 bg-black/40 transition-opacity z-40"></div>
        <div className="h-screen z-50 bg-white fixed w-80 right-0" data-simplebar>
            <div className="flex items-center p-4 border-b border-gray-100">
                <h5 className="m-0 mr-2">Theme Customizer</h5>
                <a href="javascript:void(0);" className="h-6 w-6 text-center bg-gray-700 ml-auto rounded-full" >
                    <i className="mdi mdi-close text-15 align-middle text-white leading-relaxed"></i>
                </a>
            </div>
            <div className="p-4">
                <h6 className="mb-3">Layout</h6>
                <div className="flex gap-4">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout" id="layout-vertical" value="vertical" />
                        <label className="align-middle" for="layout-vertical">Vertical</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" type="radio" name="layout" id="layout-horizontal" value="horizontal" />
                        <label className="align-middle" for="layout-horizontal">Horizontal</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2">Layout Mode</h6>
                <div className="flex gap-4">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout-mode" id="layout-mode-light" value="light" />
                        <label className="form-check-label" for="layout-mode-light">Light</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" type="radio" name="layout-mode" id="layout-mode-dark" value="dark" />
                        <label className="form-check-label" for="layout-mode-dark">Dark</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2">Layout Width</h6>

                <div className="flex gap-4">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout-width" id="layout-width-fuild" value="fuild" onchange="document.body.setAttribute('data-layout-size', 'fluid')" />
                        <label className="form-check-label" for="layout-width-fuild">Fluid</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" type="radio" name="layout-width" id="layout-width-boxed" value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed')" />
                        <label className="form-check-label" for="layout-width-boxed">Boxed</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2">Layout Position</h6>
                <div className="flex gap-4">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout-position" id="layout-position-fixed" value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')" />
                        <label className="form-check-label" for="layout-position-fixed">Fixed</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout-position" id="layout-position-scrollable" value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')" />
                        <label className="form-check-label" for="layout-position-scrollable">Scrollable</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2">Topbar Color</h6>
                <div className="flex gap-4">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="topbar-color" id="topbar-color-light" value="light" onchange="document.body.setAttribute('data-topbar', 'light')" />
                        <label className="form-check-label" for="topbar-color-light">Light</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" type="radio" name="topbar-color" id="topbar-color-dark" value="dark" onchange="document.body.setAttribute('data-topbar', 'dark')" />
                        <label className="form-check-label" for="topbar-color-dark">Dark</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>

                <div className="space-y-1">
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" checked type="radio" name="sidebar-size" id="sidebar-size-default" value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')" />
                        <label className="form-check-label" for="sidebar-size-default">Default</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" type="radio" name="sidebar-size" id="sidebar-size-compact" value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')" />
                        <label className="form-check-label" for="sidebar-size-compact">Compact</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" type="radio" name="sidebar-size" id="sidebar-size-small" value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')" />
                        <label className="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>
                <div className="space-y-1">
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" checked type="radio" name="sidebar-color" id="sidebar-color-light" value="light" onchange="document.body.setAttribute('data-sidebar', 'light')" />
                        <label className="form-check-label" for="sidebar-color-light">Light</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" type="radio" name="sidebar-color" id="sidebar-color-dark" value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')" />
                        <label className="form-check-label" for="sidebar-color-dark">Dark</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="focus:ring-0" type="radio" name="sidebar-color" id="sidebar-color-brand" value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')" />
                        <label className="form-check-label" for="sidebar-color-brand">Brand</label>
                    </div>
                </div>

                <h6 className="mt-4 mb-3 pt-2">Direction</h6>
                <div className="space-y-1">
                    <div>
                        <input className="focus:ring-0" checked type="radio" name="layout-direction" id="layout-direction-ltr" value="ltr" />
                        <label className="form-check-label" for="layout-direction-ltr">LTR</label>
                    </div>
                    <div>
                        <input className="focus:ring-0" type="radio" name="layout-direction" id="layout-direction-rtl" value="rtl" />
                        <label className="form-check-label" for="layout-direction-rtl">RTL</label>
                    </div>
                </div>

            </div>
        </div>
    </div>
   </>
  );
}
