import { ArchiveIcon, LightBulbIcon, RefreshIcon, ChipIcon, QrcodeIcon, CreditCardIcon  } from '@heroicons/react/outline'


export default function Sidebar() {
    return (
        <section className="flex flex-col h-screen w-[250px] bg-gray-200">
            <h1 className="font-medium text-3xl m-5 pb-20">Etheric</h1>

        <ul className="space-y-10">
            <li className="sidebar-btn">
                <ChipIcon className="sidebar-icon" />
                Overview
            </li>
            <li className="sidebar-btn">
                <QrcodeIcon className="sidebar-icon" />
                Capitalization
            </li>
            <li className="sidebar-btn">
                <ArchiveIcon className="sidebar-icon" />
                Company
            </li>   
            <li className="sidebar-btn">
                <CreditCardIcon className="sidebar-icon" />
                Cards
            </li>
            <li className="sidebar-btn">
                <RefreshIcon className="sidebar-icon" />
                Exchange
            </li>
        </ul>
        <div className="sidebar-btn">
            
        </div>
        </section>
    )
}
