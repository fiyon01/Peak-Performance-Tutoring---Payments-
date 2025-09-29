export default function Navbar() {
  return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-white font-bold text-xl tracking-wide">
            Peak<span className="text-red-500">Tutoring</span>
            </div>

            {/* Links */}
            <div className="hidden md:flex space-x-8">
            <a href="#programs" className="text-gray-300 hover:text-red-500 transition">Programs</a>
            <a href="#register" className="text-gray-300 hover:text-red-500 transition">Register</a>
            <a href="#payments" className="text-gray-300 hover:text-red-500 transition">Payments</a>
            <a href="#contact" className="text-gray-300 hover:text-red-500 transition">Contact</a>
            </div>

            {/* CTA Button */}
            <div>
            <a
                href="#register"
                className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg shadow-red-500/30 hover:bg-red-500 transition"
            >
                Register Now
            </a>
            </div>
        </div>
        </nav>

  );
}
