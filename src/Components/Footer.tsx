import React from 'react';
import image from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
           <img src={image} alt="Dev Stack Logo" />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

            <div className="mt-5 flex gap-4 text-sm">
              <a
                href="#"
                className=" text-black  "
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-black"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-black"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black">Product</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block ">
                Technologies
              </a>
              <a href="#" className="block ">
                Projects
              </a>
              <a href="#" className="block ">
                Features
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block ">
                About
              </a>
              <a href="#" className="block ">
                Contact
              </a>
              <a href="#" className="block ">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black">Legal</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block ">
                Privacy
              </a>
              <a href="#" className="block ">
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