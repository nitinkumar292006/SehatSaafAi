import { useState } from "react"

import UploadCard from "../components/UploadCard.jsx"
import Summary from "../components/Summary.jsx"
import Suspicious from "../components/Suspicious.jsx"
import ItemsTable from "../components/ItemsTable.jsx"
import BillPreview from "../components/BillPreview.jsx"
import Explanation from "../components/Explanation.jsx"

export default function Dashboard() {

    const [data, setData] = useState(null)
    const [image, setImage] = useState(null)

    return (

        <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT PANEL */}
                <div className="lg:col-span-4 space-y-6">

                    <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-2xl shadow-xl p-4">
                        <UploadCard setData={setData} setImage={setImage} />
                    </div>

                    <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-2xl shadow-xl p-4">
                        <BillPreview image={image} />
                    </div>

                    {data && (
                        <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-2xl shadow-xl p-4">
                            <Explanation text={data.explanation} />
                        </div>
                    )}

                </div>

                {/* RIGHT PANEL */}
                <div className="lg:col-span-8 space-y-6">

                    {data && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-4">
                                    <Suspicious data={data?.suspicious || []} />
                                </div>

                                <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-4">
                                    <Summary summary={data.summary} />
                                </div>

                            </div>

                            <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-4">
                                <ItemsTable items={data.items} />
                            </div>
                        </>
                    )}

                </div>

            </div>

        </div>
    )
}
