import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form action="" className="profile-form">
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <input
          type="password"
          className="password"
          placeholder="Enter your password"
        />
        <button>Sign in</button>
      </form>
    </>
  );
};

export default InputFocus;
