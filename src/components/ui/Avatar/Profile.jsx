export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-2">
        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
          alt=""
        />

        <div>
          <h1 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
            Mia John
          </h1>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            miajohn@merakiui.com
          </p>
        </div>
      </div>
    </div>
  );
}
