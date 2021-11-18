import { ChipIcon } from "@heroicons/react/solid";

const colors = ['blue','green','purple','orange']

export default function Transactions() {
  return (
    <figure className="flex w-full lg:w-1/2 flex-col p-5">
      <div className="flex justify-between">
        <h1 className="capitalize mb-10 text-2xl">transactions</h1>
        <h2 className="text-gray-500 capitalize">June 2021</h2>
      </div>
      <ul className="space-y-4">
        {colors.map((x,index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="`transaction-icon bg-{x}-300`">
                <ChipIcon className="h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="capitalize text-lg">github</h1>
                <p className="text-gray-500 capitalize">your funds</p>
              </div>
            </div>
            <h2 className="text-lg text-gray-400">- $3,000</h2>
          </li>
        ))}
      </ul>
    </figure>
  );
}
