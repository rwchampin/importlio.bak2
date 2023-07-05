export default function AvatarProfile({ user }:any) {
  return (
    <div className="space-y-6 shadow-lg hover:shadow-2xl">
      <div className="flex items-center gap-x-2">
        <img
          className="object-cover w-8 h-8 rounded-full"
          src={user?.image}
          alt=""
        />

        <div>
          <h1 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
            {user?.name}
          </h1>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}
