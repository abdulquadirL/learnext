import Image from "next/image";
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { lusitana } from './ui/fonts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex  flex-row h-20 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-52">
        {/* <DealLogo /> */}
        <div className="flex flex-row gap-4 md:px-14" >
        <button className="bg-[#fff] text-green p-2 rounded-lg" >Signup</button>
        <button className="bg-[#fff] text-green p-2 rounded-lg" >Login</button>
        </div> 
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <h1 className="text-xl md:text-3xl font-bold text-green-600 gap-4">Secured, Boundless and Hassle-free Agrocommodity trading</h1>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong> Deal</strong> is your one stop hub for transparent and secured Agrocommodity trading in Africa.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            {/* <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" /> */}
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          
          <Image src='/hero-desktop.png'
                  width={1000}
                  height={760}
                  className="hidden md:block"
                  alt='Screenshorts of the dashboard project project showing desktop version'
           />
           <Image
                  src='/hero-mobile.png'
                  width={560}
                  height={620}
                  className='block md:hidden'
                  alt='Screenshorts of the dashboard project showing mobile version'
            />
          
          </div>
        </div>

    </main>
  );
}
