export default function ItemsTable({ items }) {

    return (

        <div className="bg-white border rounded-lg p-6">

            <h2 className="font-semibold text-gray-900 mb-4">
                Bill Items
            </h2>

            <div className="overflow-x-auto">

                <table className="w-full text-sm rounded-xl overflow-hidden">

                    <thead className="bg-gray-100 text-gray-700">

                        <tr className="hover:bg-blue-50 transition">

                            <th className="py-2">Name</th>
                            <th>Amount</th>
                            <th>Category</th>

                        </tr>

                    </thead>

                    <tbody>

                        {items.map((item, i) => (

                            <tr key={i} className="border-b">

                                <td className="py-2">{item.name}</td>
                                <td>₹{item.amount}</td>
                                <td>{item.category}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}