/* eslint-disable react/jsx-no-undef */
import { createContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchInput from "./components/search/SearchInput";
import UserInfo from "./components/user/UserInfo";
import { OctoData } from "./components/octodata/data";
export const UserGithubData = createContext();
function App() {
  const [data, setData] = useState(OctoData);
  return (
    <>
      <UserGithubData.Provider value={[data, setData]}>
        <div
          className="flex justify-center flex-col items-center min-h-screen w-screen 
         bg-lightWhite dark:bg-darkModeMainBg"
        >
          <Navbar />
          <SearchInput />
          <UserInfo />
        </div>
      </UserGithubData.Provider>
    </>
  );
}

export default App;
