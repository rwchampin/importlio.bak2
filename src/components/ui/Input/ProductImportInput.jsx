export default function () {

    return (
        <div className="max-w-md px-4 mx-auto mt-12">
            <label htmlFor="url" className="block py-2 text-gray-500">
                Product URL
            </label>
            <div className="flex items-center text-gray-400 border rounded-md">

                <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                    url
                </div>
                <input
                    type="text"
                    placeholder="www.amazon.com"
                    id="url"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                />
            </div>
        </div>
    )

}