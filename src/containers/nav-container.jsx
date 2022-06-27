import React from "react";
import Nav from "../components/nav";
import gsap from "gsap";

const NavContainer = () => {
  const [fixed, setFixed] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const animation = React.useRef(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight) {
        setFixed(true);
      } else {
        setFixed(false);
        setOpen(false);
      }
    });
  }, []);

  React.useEffect(() => {
    if (fixed) {
      animation.current = gsap.fromTo(
        menuRef.current.children,
        {
          autoAlpha: 0,
          x: 100,
          height: "0px",
        },
        {
          autoAlpha: 1,
          x: 0,
          height: "40px",
          stagger: 0.1,
        }
      );
      return () => animation.current.kill();
    }
  }, [fixed]);

  React.useEffect(() => {
    fixed && animation.current.reversed(!open);
  }, [fixed, open]);

  return (
    <>
      <Nav fixed={fixed} setOpen={setOpen} ref={menuRef} />
    </>
  );
};

export default NavContainer;
