import axios from "axios"
import { useState } from "react"

export default function UploadCard({ setData, setImage }) {

    const [loading, setLoading] = useState(false)
    const [fileName, setFileName] = useState("")

    const handleUpload = async (e) => {

        const file = e.target.files[0]
        if (!file) return

        setFileName(file.name)
        setImage(URL.createObjectURL(file))

        const formData = new FormData()
        formData.append("bill", file)

        setLoading(true)

        try {
            const res = await axios.post(
                "http://localhost:5000/api/bill/analyze",
                formData
            )

            setData(res.data)

        } catch (err) {
            console.log(err)
        }

        setLoading(false)
    }

    return (

        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-6 text-center transition-all duration-300 hover:shadow-2xl">

            {/* HEADER */}
            <h2 className="font-semibold text-gray-800 text-lg mb-1">
                🧾 Upload Medical Bill
            </h2>

            <p className="text-gray-500 text-sm mb-4">
                AI will analyze your bill & detect overcharges instantly
            </p>

            {/* UPLOAD BOX */}
            <label className="block border-2 border-dashed border-blue-300 rounded-xl p-8 cursor-pointer hover:bg-blue-50 transition-all duration-300">

                <input
                    type="file"
                    onChange={handleUpload}
                    className="hidden"
                />

                {!loading ? (
                    <div className="space-y-2">

                        <p className="text-gray-600 text-sm">
                            📄 Drag & drop or click to upload
                        </p>

                        <p className="text-xs text-gray-400">
                            JPG, PNG, PDF supported
                        </p>

                        {fileName && (
                            <p className="text-blue-600 text-xs mt-2">
                                Selected: {fileName}
                            </p>
                        )}

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">

                        {/* Spinner */}
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                        <p className="text-blue-600 text-sm font-medium animate-pulse">
                            🤖 AI is analyzing your bill...
                        </p>

                        {/* Fake AI steps */}
                        <div className="text-xs text-gray-500 space-y-1">
                            <p>✔ Extracting bill text</p>
                            <p>✔ Identifying items</p>
                            <p>✔ Comparing market prices</p>
                            <p>✔ Detecting suspicious charges</p>
                        </div>

                    </div>
                )}

            </label>

            {/* EMPTY STATE MESSAGE */}
            {!loading && !fileName && (
                <p className="mt-5 text-xs text-gray-400">
                    Upload a medical bill to unlock AI insights
                </p>
            )}

            {/* SUCCESS STATE */}
            {!loading && fileName && (
                <div className="mt-4 text-green-600 text-sm font-medium">
                    ✅ File ready for analysis
                </div>
            )}

        </div>
    )
}