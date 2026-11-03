"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(
    () => {
      const navTween = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "bottom top",
          scrub: true, // Ties animation progress directly to scroll position
        },
      });

      navTween.fromTo(
        navRef.current,
        { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
        {
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
          ease: "power1.inOut", // Scrub works best with 'none' ease
        },
      );
    },
    { scope: navRef },
  );

  return (
    <nav ref={navRef}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
