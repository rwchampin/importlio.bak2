import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

import { CanvasManager, EmailInput } from '@/components';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default async function Page() {

  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  // const DynamicCursor = dynamic(() => import('@/components'), {
  //   ssr: false
  // });
  return (
   
     
 

        <div className="hero container px-5 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br /> your <span className="text-blue-500 ">clothes</span></h1>
                        
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
                </div>
            </div>

        </div>


  );
  }
    {/* <div classNameNameName="landing h-full w-full flex flex-col text-center items-center justify-center"> */}
      {/* <DynamicCursor size={40} /> */}
      {/* <SphereField /> */}
      {/* <section>
        <div classNameNameName="">The #1 AI Powered</div>
        <h1 classNameNameName="text-5xl font-bold">
          <span classNameNameName="text-green-500">Shopify</span> Bulk Product Importer
        </h1>
        <div classNameNameName="font-bold text-zinc-300">
          Import UNLIMITED amazon products in minutes
        </div>
        <p classNameNameName="max-w-xl">
          The only true <i>unlimited</i> bulk shopify product importer on the
          web! Pre-register today for a chance to be one of the first 1000
          customers to get a free membership. Find & import unlimited products
          to your shopify store and watch your profits grow like never before.
        </p>
        <Link
          href="/dashboard"
          classNameNameName="bg-black rounded font-bold text-white text-lg px-10 py-3 mt-5"
        >
          Pre-Register FREE
        </Link>
      </section>
      <section classNameNameName="mt-10">
        <h3>Grow you Shopify Ecommerce Product Inventory in seconds!</h3>
        <p>
          Are you an Amazon seller looking to skyrocket your sales and expand
          your product catalog? Look no further! Our cutting-edge Amazon Product
          Bulk Importer is here to revolutionize the way you manage and import
          your products.
        </p>
      </section>
      <section classNameNameName="mt-10">
        <h3>Unleash the Power of Bulk Importing</h3>
        Say goodbye to the tedious task of manually adding products one by one.
        Our powerful tool enables you to effortlessly import a large number of
        products into your Amazon store in just a few clicks. With our Amazon
        Product Bulk Importer, you can save valuable time and focus on what
        truly matters – growing your business.
      </section>
      <h4>Features</h4>
      <section classNameNameName="mt-10">
        <div classNameNameName="flex flex-col gap-10">
          <h5>Streamline Your Product Management</h5>
          Efficiency is the name of the
          game, and our tool is designed to streamline your product management
          process. Seamlessly organize and update your product listings, prices,
          descriptions, and more, all from a centralized dashboard. Experience
          hassle-free inventory management and keep your Amazon store up-to-date
          effortlessly.
        </div>

        <div classNameNameName="flex flex-col  gap-10">
          <h5>Keyword Optimization for Enhanced Visibility</h5>
           We understand the
          importance of standing out in the highly competitive Amazon
          marketplace. Our Amazon Product Bulk Importer allows you to optimize
          your product listings with strategic keywords, ensuring maximum
          visibility for your products. Boost your rankings, attract more
          customers, and watch your sales soar to new heights.
        </div>

  
        <div classNameNameName="flex flex-col   gap-10">
          <h5>Effortless Integration and User-Friendly Interface</h5>
           No complex setup
          or technical expertise required! Our Amazon Product Bulk Importer
          seamlessly integrates with your existing Amazon seller account, making
          it a breeze to get started. The intuitive user interface ensures a
          smooth and hassle-free experience, even for beginners. Get up and
          running in no time, and let our tool simplify your Amazon selling
          journey.
        </div>

        <div classNameNameName="flex flex-col gap-10">
          <h5>Stay Ahead with Real-Time Updates</h5>
           Keep your finger on the pulse of
          your Amazon business with real-time updates. Our Amazon Product Bulk
          Importer provides you with the latest insights and analytics to
          monitor the performance of your products. Stay informed about sales
          trends, inventory levels, and more, empowering you to make data-driven
          decisions for sustainable growth.
        </div>

        <div classNameNameName="flex flex-col gap-10">
          <h5>Experience the Power of Our Amazon Product Bulk Importer</h5> Unleash the
          true potential of your Amazon business with our revolutionary Amazon
          Product Bulk Importer. Say goodbye to manual data entry and embrace
          the efficiency of bulk importing. Stay ahead of the competition,
          optimize your product listings, and watch your sales skyrocket.
        </div>
      </section> */}
    {/* </div> */}
   {/* </>
  );
} */}
