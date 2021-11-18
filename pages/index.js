import Head from "next/head";
import Sidebar from "../components/Sidebar";
import AccountCard from '../components/AccountCard'
import Transactions from '../components/Transactions'
import { BriefcaseIcon, GlobeIcon, ChartPieIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>Etheric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <section className="py-5 w-full space-y-14 px-20">
          <header className="flex justify-between">
            <ul className="flex space-x-10">
              <li className="header-card">
                <div className="header-icon">
                  <BriefcaseIcon className="h-7" />
                </div>
                <div className="flex flex-col">
                  <h1 className="sidebar-title">$ 1,000,000</h1>
                  <p className="text-gray-500 capitalize">your funds</p>
                </div>
              </li>
              <li className="header-card">
                <div className="header-icon">
                  <ChartPieIcon className="h-7" />
                </div>
                <div className="flex flex-col">
                  <h1 className="sidebar-title">$ 2,546,000</h1>
                  <p className="text-gray-500 capitalize">borrowed funds</p>
                </div>
              </li>
              <li className="header-card">
                <div className="header-icon">
                  <GlobeIcon className="h-7" />
                </div>
                <div className="flex flex-col">
                  <h1 className="sidebar-title">52.3 %</h1>
                  <p className="text-gray-500 capitalize">percent</p>
                </div>
              </li>
            </ul>
            <div className="flex items-center"> 
              <DotsHorizontalIcon className="h-5 mr-4 text-black" />
              <Image className="rounded-full" src="https://via.placeholder.com/50" width={50} height={50} alt="profile pic" />
            </div>
          </header>
          <div className="flex">
            <AccountCard />
            <Transactions />
          </div>
        </section>
      </main>
    </div>
  );
}
