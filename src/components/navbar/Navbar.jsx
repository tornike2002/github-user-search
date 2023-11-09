/* eslint-disable no-unused-vars */
import { Fragment, useState, useEffect } from "react";
import modeNight from "../../assets/icons/icon-moon.svg";
import modeDay from "../../assets/icons/icon-sun.svg";

const Navbar = () => {
  const [darkmodeToggle, setDarkmodeToggle] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const darkModeToggleHandler = () => {
    setDarkmodeToggle((value) => !value);
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return (
    <Fragment>
      <div className="flex justify-between items-center w-[90%] md:w-2/4 dark:text-ellipsis">
        <h1 className="text-darkBlue font-spaceMono text-2xl font-bold leading-normal dark:text-white">
          devfinder
        </h1>
        <div className="flex gap-3 items-center">
          <p
            className="text-lightBlue font-spaceMono text-base font-bold tracking-widest
           leading-normal dark:text-white"
          >
            {theme === "light" ? "DARK" : "LIGHT"}
          </p>
          <img
            src={theme === "light" ? modeNight : modeDay}
            alt="switcher"
            className="cursor-pointer"
            onClick={darkModeToggleHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
