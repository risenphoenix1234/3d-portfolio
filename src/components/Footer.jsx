import React from 'react';
import { SectionWrapper } from "../hoc";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HRAtk(Risenphoenix). All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SectionWrapper(Footer, "");
