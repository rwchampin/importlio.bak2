import { EmailInput,PasswordInput, Logo } from "@/components";
import Script from "next/script";
export default function Page() {
    const test = async () => {
       const res = await fetch('https://accounts.google.com/o/oauth2/v2/auth', {
            method: 'POST',
            body: JSON.stringify({
                client_id: "286561888550-mloc3g5h6vi9959tkedubfan41eu3vfj.apps.googleusercontent.com"
            })
        })

        console.log(res)
        debugger
    }
    test()
    const onSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!

        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());

        console.log("Image URL: " + profile.getImageUrl());

        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        const id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }
  return (
    <div className="w-full px-6 py-20 my-10 mx-auto md:px-8 lg:w-1/2 max-w-2xl">
    <div className="flex justify-center mx-auto">
        <Logo className="w-32 h-32" />
    </div>
    <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
      Welcome back!
    </p>

    <a
      href="#"
      className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <div className="px-4">
        <svg className="w-6 h-6" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>
      </div>

      <span className="w-5/6 px-4 py-3 font-bold text-center">
        Sign in with Google
      </span>
    </a>



      <div
        className="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
      >
       - or -
      </div>



    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
        htmlFor="LoggingEmailAddress"
      >
        Email Address
      </label>
     <EmailInput />
    </div>

    <div className="mt-4">
      <div className="flex justify-between">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="loggingPassword"
        >
          Password
        </label>
        <a
          href="#"
          className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
        >
          Forget Password?
        </a>
      </div>

      <PasswordInput />
    </div>

    <div className="mt-6">
      <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
        Sign In
      </button>
    </div>

    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

      <a
        href="/auth/register"
        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or sign up
      </a>

      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div>
  </div>
  );
}
