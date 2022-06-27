import React from "react";
import PropTypes from "prop-types";
import styles from "./nav.module.css";
import clsx from "clsx";
import OutSideClickListener from "../outside-click-listener";

const Nav = React.forwardRef((props, ref) => {
  const { fixed, setOpen } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.placeholder} />
      <nav className={clsx(styles.nav, fixed && styles.sticky)}>
        {fixed ? (
          <OutSideClickListener action={() => setOpen(false)}>
            <button onClick={() => setOpen((prev) => !prev)}>O</button>
            <menu role="menu" className={clsx(styles.vertical)} ref={ref}>
              <li role="menuitem">
                <a href="#home">home</a>
              </li>
              <li role="menuitem">
                <a href="#about">about</a>
              </li>
              <li role="menuitem">
                <a href="#my-works">work</a>
              </li>
              <li role="menuitem">
                <a href="#contact">contact</a>
              </li>
            </menu>
          </OutSideClickListener>
        ) : (
          <menu role="menu" className={styles.menu}>
            <li role="menuitem">
              <a href="#home">home</a>
            </li>
            <li role="menuitem">
              <a href="#about">about</a>
            </li>
            <li role="menuitem">
              <a href="#my-works">my works</a>
            </li>
            <li role="menuitem">
              <a href="#contact">contact</a>
            </li>
          </menu>
        )}
      </nav>
    </div>
  );
});

Nav.propTypes = {
  fixed: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Nav;
