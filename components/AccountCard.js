import { CashIcon } from "@heroicons/react/outline";

export default function AccountCard() {
  return (
    <figure className="flex w-full xl:w-1/2 flex-col space-y-10 bg-black text-white p-10">
      <div className="flex justify-between pb-4 border-b-2">
        <h1 className="text-2xl">Accounts and Cards</h1>
        <p className="text-gray-400">recently created</p>
      </div>
      <div className="flex flex-col  pb-4 border-b-2">
        <div className="flex">
          <div className="flex items-center mr-5 justify-center rounded-full bg-white h-10 w-10">
            <CashIcon className="h-6 text-black" />
          </div>
          <h1 className="text-2xl font-medium pb-5">Card Pro</h1>
        </div>
        <p className="text-xs pb-14 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="flex justify-between">
          <li className="flex flex-col">
            <p className="capitalize text-gray-300">monthly payment</p>
            <div className="flex space-x-2 items-center">
              <h1 className="text-4xl">$ 5,000</h1>
              <p className="text-gray-500 line-through">$3,000</p>
            </div>
          </li>
          <li className="flex flex-col">
            <p className="capitalize text-gray-300">intrest rate</p>
            <div className="flex space-x-2 items-center">
              <h1 className="text-4xl">$ 5,000</h1>
              <p className="text-gray-500 line-through">$3,000</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between">
          <li className="flex flex-col">
            <p className="capitalize text-gray-300">monthly withdraw</p>
            <div className="flex space-x-2 items-center">
              <h1 className="text-4xl">$ 15,000</h1>
              <p className="text-gray-500 line-through">$1,000</p>
            </div>
          </li>
          <li className="flex flex-col">
            <p className="capitalize text-gray-300">service</p>
            <div className="flex space-x-2 items-center">
              <h1 className="text-4xl">$ 35.00</h1>
              <p className="text-gray-500 line-through">$45.00</p>
            </div>
          </li>
        </ul>
      </div>
    </figure>
  );
}
