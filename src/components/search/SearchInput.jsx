/* eslint-disable no-unused-vars */
import { Fragment, useContext, useRef } from "react";
import iconSearch from "../../assets/icons/icon-search.svg";
import { UserGithubData } from "../../App";
import axios from "axios";

const SearchInput = () => {
  const [data, setData] = useContext(UserGithubData);
  const inputRef = useRef("");

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${inputRef.current.value}`
    );
    setData(response.data);
  };

  return (
    <Fragment>
      <div className="pt-6 w-[90%] md:w-2/4 relative">
        <input
          type="search"
          className="w-full py-6 dark:bg-darkModeLightBg rounded-2xl shadow-input-shadow px-10 md:px-20
           placeholder:text-textContent placeholder:font-spaceMono placeholder:md:text-lg placeholder:text-sm
            text-lg text-darkBlue font-spaceMono font-normal dark:text-white
            placeholder:font-normal"
          placeholder="Search GitHub username…"
          ref={inputRef}
        />
        <img
          src={iconSearch}
          alt="iconSearch"
          className="absolute left-3 top-[3.2rem] md:left-8 md:top-12"
        />
        <button
          type="button"
          className="absolute right-2 top-10 font-spaceMono font-bold leading-normal not-italic text-white
           bg-lightBgButton p-3 rounded-xl"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default SearchInput;
