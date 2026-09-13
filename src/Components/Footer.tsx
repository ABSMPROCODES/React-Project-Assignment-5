import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-2xl font-extrabold brand-gradient-text">
              Dev Stack
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Build your ideal technology stack by exploring modern
              tools, frameworks, languages, and platforms.
            </p>

            <div className="mt-5 flex gap-4 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                Technologies
              </a>
              <a href="#" className="block hover:text-white">
                Projects
              </a>
              <a href="#" className="block hover:text-white">
                Features
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                About
              </a>
              <a href="#" className="block hover:text-white">
                Contact
              </a>
              <a href="#" className="block hover:text-white">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                Privacy
              </a>
              <a href="#" className="block hover:text-white">
                Terms
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;