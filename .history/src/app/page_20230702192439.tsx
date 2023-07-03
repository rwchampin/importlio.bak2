import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import LandingScene from '@/components';
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
    <div className="landing h-full w-full flex flex-col text-center items-center justify-center">
      {/* <DynamicCursor size={40} /> */}
      <LandingScene />
      <section>
        <div className="">The #1 AI Powered</div>
        <h1 className="text-5xl font-bold">
          <span className="text-green-500">Shopify</span> Bulk Product Importer
        </h1>
        <div className="font-bold text-zinc-300">
          Import UNLIMITED amazon products in minutes
        </div>
        <p className="max-w-xl">
          The only true <i>unlimited</i> bulk shopify product importer on the
          web! Pre-register today for a chance to be one of the first 1000
          customers to get a free membership. Find & import unlimited products
          to your shopify store and watch your profits grow like never before.
        </p>
        <Link
          href="/dashboard"
          className="bg-black rounded font-bold text-white text-lg px-10 py-3 mt-5"
        >
          Pre-Register FREE
        </Link>
      </section>
      <section className="mt-10">
        <h3>Grow you Shopify Ecommerce Product Inventory in seconds!</h3>
        <p>
          Are you an Amazon seller looking to skyrocket your sales and expand
          your product catalog? Look no further! Our cutting-edge Amazon Product
          Bulk Importer is here to revolutionize the way you manage and import
          your products.
        </p>
      </section>
      <section className="mt-10">
        <h3>Unleash the Power of Bulk Importing</h3>
        Say goodbye to the tedious task of manually adding products one by one.
        Our powerful tool enables you to effortlessly import a large number of
        products into your Amazon store in just a few clicks. With our Amazon
        Product Bulk Importer, you can save valuable time and focus on what
        truly matters – growing your business.
      </section>
      <h4>Features</h4>
      <section className="mt-10">
        <div className="flex flex-col gap-10">
          <h5>Streamline Your Product Management</h5>
          Efficiency is the name of the
          game, and our tool is designed to streamline your product management
          process. Seamlessly organize and update your product listings, prices,
          descriptions, and more, all from a centralized dashboard. Experience
          hassle-free inventory management and keep your Amazon store up-to-date
          effortlessly.
        </div>

        <div className="flex flex-col  gap-10">
          <h5>Keyword Optimization for Enhanced Visibility</h5>
           We understand the
          importance of standing out in the highly competitive Amazon
          marketplace. Our Amazon Product Bulk Importer allows you to optimize
          your product listings with strategic keywords, ensuring maximum
          visibility for your products. Boost your rankings, attract more
          customers, and watch your sales soar to new heights.
        </div>

  
        <div className="flex flex-col   gap-10">
          <h5>Effortless Integration and User-Friendly Interface</h5>
           No complex setup
          or technical expertise required! Our Amazon Product Bulk Importer
          seamlessly integrates with your existing Amazon seller account, making
          it a breeze to get started. The intuitive user interface ensures a
          smooth and hassle-free experience, even for beginners. Get up and
          running in no time, and let our tool simplify your Amazon selling
          journey.
        </div>

        <div className="flex flex-col gap-10">
          <h5>Stay Ahead with Real-Time Updates</h5>
           Keep your finger on the pulse of
          your Amazon business with real-time updates. Our Amazon Product Bulk
          Importer provides you with the latest insights and analytics to
          monitor the performance of your products. Stay informed about sales
          trends, inventory levels, and more, empowering you to make data-driven
          decisions for sustainable growth.
        </div>

        <div className="flex flex-col gap-10">
          <h5>Experience the Power of Our Amazon Product Bulk Importer</h5> Unleash the
          true potential of your Amazon business with our revolutionary Amazon
          Product Bulk Importer. Say goodbye to manual data entry and embrace
          the efficiency of bulk importing. Stay ahead of the competition,
          optimize your product listings, and watch your sales skyrocket.
        </div>
      </section>
    </div>
  );
}
