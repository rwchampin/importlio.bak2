import Search from '@/components/icons/Search';

export default function SearchInput() {
  return (
    <>
      <aside className="search-icon relative p-3 text-dark">
        <Search />
      </aside>
      <input
        type="text"
        placeholder={'Search'}
        className="input search-input h-full w-full outline-none focus:outline-none"
      />
    </>
  );
}
