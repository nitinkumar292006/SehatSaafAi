import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

  const location = useLocation()

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
        location.pathname === path
          ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <div className="bg-white/60 backdrop-blur-xl border-b border-white/30 sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text tracking-tight"
        >
          SehatSaaf.Ai
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-3">

          {navLink("/dashboard", "🧾 Bills")}

          {navLink("/prescription", "💊 Medicines")}

          {/* CTA BUTTON */}
          <Link
            to="/"
            className="ml-3 px-5 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>

        </div>

      </div>

    </div>
  )
}