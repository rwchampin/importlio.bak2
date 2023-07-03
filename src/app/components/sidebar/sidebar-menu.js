"use client";
import {
    HomeIcon,
    EnvelopeOpenIcon,
    IdCardIcon,
    MixerHorizontalIcon,
    MagnifyingGlassIcon,
    ArchiveIcon,
    BackpackIcon,
    ListBulletIcon
  } from '@radix-ui/react-icons';
  import {motion} from '@/libs/framer';
  import Link from 'next/link';
  import Avatar from '@/libs/avatar';

export const SidebarMenu = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        },
        transition: {
            delay: 2,
            type: "spring",
            when: "beforeChildren",
            staggerChildren: 1,
            duration: 0.5,  
            delayChildren: 1,
        }
    }
    return (

            <div
                initial="hidden"
                animate="show"
                variants={container}
                className="flex flex-col justify-between w-fill h-full bg-red-900"
            >
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard">
                        <HomeIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard/messages">
                        <EnvelopeOpenIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard/lists">
                        <ListBulletIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="dashboard/profile">
                        <IdCardIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard/settings">
                        <MixerHorizontalIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard/import">
                        <ArchiveIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
                <motion.div initial="hidden" animate="show" variants={container}>
                    <Link href="/dashboard/products">
                        <BackpackIcon className="icon w-6 h-6 text-gray-400" />
                    </Link>
                </motion.div>
            </div>

    )
}