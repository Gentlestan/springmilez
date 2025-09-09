// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold">Springmillez <span className="text-amber-400">Engineering</span></div>
          <p className="text-stone-400 mt-2">
            Design • Sales • Installation — Solar, Electrical & CCTV.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2 text-stone-400">
            <li> <Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-stone-400">adukumark@gmail.com</p>
          <p className="text-stone-400">+234 703 275 1067</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-stone-500 text-sm">
        © {new Date().getFullYear()} Springmillez Solar. All rights reserved.
      </div>
    </footer>
  );
}
