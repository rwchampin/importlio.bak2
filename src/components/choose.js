

import { Title } from "@/components";
import { KeyboardIcon, FileIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Choose = () => {
    return (
        <div className="rounded-lg bg-slate-100 px-2 py-2 flex flex-row justify-center items-center gap-5 mt-5">
            <Link href="/dashboard/import/basic">
            <div
                className="rounded-lg bg-slate-300 border-2 border-solid  border-slate-600 px-5 py-5 flex flex-col justify-center items-center hover:cursor-pointer hover:bg-slate-800"
            >
                <Title size="small">
                    Basic Import
                </Title>
                <KeyboardIcon className="w-6 h-6 text-black text-lg" />
            </div>
            </Link>
            <Link href="/dashboard/import/bulk">
            <div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-lg bg-slate-200 px-5 py-5 flex flex-col justify-center items-center"
            >

                <Title size="small">Bulk Import</Title>
                <FileIcon scale={2} className="w-6 h-6 text-black text-xl" />
            </div>
            </Link>
        </div>
    )
}

export default Choose;