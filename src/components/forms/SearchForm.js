import { SearchInput } from "@/components";

export default function SearchForm() {
    
    return (
        <form className="search-form rounded-xl bg-gray w-full h-full max-w-lg focus:outline-none">
            <SearchInput />
        </form>
    )
}