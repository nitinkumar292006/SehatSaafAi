import { PieChart, Pie, Cell, Tooltip } from "recharts"

export default function Summary({ summary }) {

    const data = Object.entries(summary.categoryBreakdown)
        .map(([name, value]) => ({ name, value }))

    const colors = [
        "#2563eb",
        "#16a34a",
        "#f97316",
        "#ef4444",
        "#9333ea"
    ]

    return (

        <div className="bg-linear-to-br from-white to-blue-50 border rounded-xl p-6 shadow-md">

            <h2 className="font-semibold text-gray-900 mb-4">
                Bill Breakdown
            </h2>

            <div className="flex justify-center  overflow-x-auto">

                <PieChart width={350} height={250}>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                    >

                        {data.map((_, i) => (
                            <Cell key={i} fill={colors[i % colors.length]} />
                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </div>

        </div>

    )

}