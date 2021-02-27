import React from "react";

// components

import FooterSmall from "components/Footers/FooterSmall.js";
import NavbarAlternative from "../components/Navbars/AuthNavbarAlternative";

export default function Auth({ children }) {
  return (
    <>
      <NavbarAlternative transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/health_3_background_1920_1200.jpg") + ")",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
