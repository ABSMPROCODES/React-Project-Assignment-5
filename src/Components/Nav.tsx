import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="h-20 relative flex items-center justify-between">


          <div className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700">
            ☰
          </div>

  
          <img
            src={logo}
            alt="Dev Stack"
            className="w-auto h-9 md:static absolute left-1/2 -translate-x-1/2"
          />

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
            <li className="text-[#D91B7E]">
              Home
            </li>

            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 sm:px-4 py-2 text-sm font-medium text-slate-700"
            >
              Sign In
            </button>

            <button
              type="button"
              className="bg-[#D91B7E] px-4 sm:px-5 py-2.5 text-sm font-semibold text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;