import React from "react";
import useOutsideClickListener from "../hooks/useOutsideClickListener";

const OutSideClickListener = (props) => {
  const { action } = props;
  const wrapperRef = React.useRef(null);
  useOutsideClickListener(wrapperRef, action);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default OutSideClickListener;
