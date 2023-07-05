
export default function SimpleDropdown({ children }) {

    return (
        <div 
            // x-data="{ isOpen: true }" 
            className="relative inline-block"
        >

                {children}


            <div 
                // x-show="isOpen" 
                // @click.away="isOpen = false"
                // x-transition:enter="transition ease-out duration-100"
                // x-transition:enter-start="opacity-0 scale-90"
                // x-transition:enter-end="opacity-100 scale-100"
                // x-transition:leave="transition ease-in duration-100"
                // x-transition:leave-start="opacity-100 scale-100"
                // x-transition:leave-end="opacity-0 scale-90" 
                className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
            >
                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> your profile </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Your projects </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Help </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Settings </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Sign Out </a>
            </div>
        </div>
    )
}