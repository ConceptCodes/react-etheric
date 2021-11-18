export default function PastTransaction() {
    return (
        <figure className="bg-purple-300 flex flex-col p-5 space-y-5">
            <div className="rounded-full w-6 h-6 bg-black"></div>
            <h1 className="capitalize">pinterest</h1>
            <p>Commission from 0.035%</p>
            <hr />
            <div className="flex justify-between">
                <h1 className="text-gray-500">sent</h1>
                <h1>$ 1500</h1>
            </div>
        </figure>
    )
}
