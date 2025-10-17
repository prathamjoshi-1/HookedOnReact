import Reactl, { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1 : Run on every Render
  useEffect(() => {
    alert("Hey, I Will Run on Every Render");
  });

  // Case 2 : Run Only On First Render
  useEffect(() => {
    alert("Hey, I Will Run on First Render");
  }, []);

  // Case 3 : Run Only when certain value change
  useEffect(() => {
    alert("color was changed");
  }, [color]);

  // Case 4: Example of cleanup function

  useEffect(() => {
    alert("Welcome to my Page.");

    return () => {
      alert("Component was unmounted");
    };
  }, []);

  return <div>I am Navbar of {color} color hehe..</div>;
};

export default Navbar;
