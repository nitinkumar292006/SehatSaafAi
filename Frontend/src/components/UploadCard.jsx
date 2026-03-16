import axios from "axios"
import { useState } from "react"

export default function UploadCard({ setData, setImage }) {

    const [loading, setLoading] = useState(false)

    const handleUpload = async (e) => {

        const file = e.target.files[0]

        setImage(URL.createObjectURL(file))

        const formData = new FormData()
        formData.append("bill", file)

        setLoading(true)

        const res = await axios.post(
            "http://localhost:5000/api/bill/analyze",
            formData
        )
        console.log(res.data)
        setData(res.data)

        setLoading(false)

    }

    return (

        <div className="bg-white rounded-xl shadow-md p-6 text-center">

            <h2 className="font-semibold text-gray-900 mb-4">
                Upload Bill
            </h2>

            <input
                type="file"
                onChange={handleUpload}
                className="w-full text-sm"
            />

            {loading && (

                <p className="text-blue-600 text-sm mt-3">
                    Analyzing bill...
                </p>

            )}

        </div>

    )

}