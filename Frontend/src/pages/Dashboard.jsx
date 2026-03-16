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

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">


                <div className="lg:col-span-4 space-y-6">

                    <UploadCard
                        setData={setData}
                        setImage={setImage}
                    />

                    <BillPreview image={image} />

                    {data && (
                        <Explanation text={data.explanation} />
                    )}

                </div>

                <div className="lg:col-span-8 space-y-6">

                    {data && (

                        <>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <Suspicious data={data?.suspicious || []} />

                                <Summary summary={data.summary} />

                            </div>

                            <ItemsTable items={data.items} />

                        </>

                    )}

                </div>


            </div>

        </div>

    )

}
