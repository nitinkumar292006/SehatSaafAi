import { useState, useEffect } from "react"

export default function Prescription() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [reminderOn, setReminderOn] = useState(false)

  // 🔔 Ask permission
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission()
    }
  }, [])

  // ⏰ Reminder system
  useEffect(() => {
    if (!data || !reminderOn) return

    const interval = setInterval(() => {
      const now = new Date()
      const currentTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })

      data.medicines.forEach((med) => {
        med.times.forEach((t) => {
          if (t === currentTime) {
            new Notification("💊 Medicine Reminder", {
              body: `Take ${med.name} (${med.instructions})`
            })
          }
        })
      })

    }, 60000)

    return () => clearInterval(interval)
  }, [data, reminderOn])


  const handleUpload = async (e) => {

    const file = e.target.files[0]
    if (!file) return

    setLoading(true)

    // 🔥 DEMO DATA (ADVANCED)
    setTimeout(() => {

      const fakeData = {
        medicines: [
          {
            name: "Paracetamol",
            frequency: "2 times/day",
            times: ["10:00 AM", "08:00 PM"],
            instructions: "After food"
          },
          {
            name: "Amoxicillin",
            frequency: "3 times/day",
            times: ["08:00 AM", "02:00 PM", "09:00 PM"],
            instructions: "Before food"
          },
          {
            name: "Vitamin D",
            frequency: "1 time/day",
            times: ["07:00 AM"],
            instructions: "With water"
          },
          {
            name: "Cough Syrup",
            frequency: "2 times/day",
            times: ["09:00 AM", "09:00 PM"],
            instructions: "After food"
          }
        ]
      }

      setData(fakeData)
      setLoading(false)

    }, 2000)
  }

  // 🔥 Highlight logic
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (

    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-100 p-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-linear-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
            💊 Smart Prescription Assistant
          </h1>
          <p className="text-gray-600 mt-2">
            AI suggests when to take medicines & reminds you automatically
          </p>
        </div>

        {/* UPLOAD */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center">

          <label className="block border-2 border-dashed border-green-300 rounded-xl p-8 cursor-pointer hover:bg-green-50 transition">

            <input type="file" onChange={handleUpload} className="hidden" />

            <p className="text-gray-600">
              📄 Upload Prescription
            </p>

          </label>

          {loading && (
            <p className="text-green-600 mt-4 animate-pulse">
              🤖 AI analyzing prescription...
            </p>
          )}
        </div>

        {/* TOGGLE */}
        {data && (
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">

            <div>
              <h3 className="font-semibold text-gray-800">
                🔔 Medicine Reminders
              </h3>
              <p className="text-sm text-gray-500">
                Enable notifications to never miss a dose
              </p>
            </div>

            <button
              onClick={() => setReminderOn(!reminderOn)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                reminderOn
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {reminderOn ? "ON" : "OFF"}
            </button>

          </div>
        )}

        {/* MEDICINES */}
        {data && (

          <div className="grid md:grid-cols-2 gap-6">

            {data.medicines.map((med, i) => {

              const isNow = med.times.includes(getCurrentTime())

              return (

                <div
                  key={i}
                  className={`rounded-2xl p-6 shadow-lg transition ${
                    isNow
                      ? "bg-green-200 border-2 border-green-500 scale-[1.02]"
                      : "bg-white/80"
                  }`}
                >

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    💊 {med.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    📊 {med.frequency}
                  </p>

                  <p className="text-sm mb-2">
                    📌 {med.instructions}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">

                    {med.times.map((t, idx) => (

                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${
                          t === getCurrentTime()
                            ? "bg-green-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {t}
                      </span>

                    ))}

                  </div>

                  {isNow && (
                    <p className="mt-3 text-green-800 font-medium text-sm">
                      ⚡ Time to take this medicine!
                    </p>
                  )}

                </div>
              )
            })}

          </div>

        )}

      </div>

    </div>
  )
}