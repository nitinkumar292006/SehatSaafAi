import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-blue-100">

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-6">
          SehatSaaf.Ai
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Smart AI that analyzes your medical bills and prescriptions,
          helping you save money and take medicines on time.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <Link to="/dashboard">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              🧾 Analyze Bill
            </button>
          </Link>

          <Link to="/prescription">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              💊 Prescription Assistant
            </button>
          </Link>

        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">

        {[
          {
            title: "Bill Analysis",
            desc: "Detect overpricing & fraud in hospital bills using AI"
          },
          {
            title: "Medicine Reminder",
            desc: "Know exactly when to take medicines with alerts"
          },
          {
            title: "Smart Explanation",
            desc: "Understand your medical data in simple language"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* TESTIMONIALS */}
      <div className="mt-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          What Users Say 💬
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Saved ₹2000 from hospital bill 😳",
            "Finally I don't forget my medicines 🙏",
            "Best healthcare AI tool I’ve used 🔥"
          ].map((text, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              ⭐⭐⭐⭐⭐
              <p className="text-gray-600 mt-3 text-sm">{text}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}