/* eslint-disable no-unused-vars */
import locationIcon from "../../assets/icons/icon-location.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import websiteIcon from "../../assets/icons/icon-website.svg";
import companyIcon from "../../assets/icons/icon-company.svg";
import { UserGithubData } from "../../App";
import { useContext } from "react";
const UserInfo = () => {
  const [data, setData] = useContext(UserGithubData);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );

    const [month, day, year] = formattedDate.split(" ");

    return `Joined ${day} ${month} ${year}`;
  };
  const originalDate = data.created_at;
  const formattedDate = formatDate(originalDate);

  return (
    <div className="w-[90%] md:w-2/4 bg-white dark:bg-darkModeLightBg rounded-2xl mt-6">
      <div className="pt-3 pl-3 lg:pt-12 lg:pl-12 flex flex-col lg:flex-row">
        <img
          src={data.avatar_url}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto "
        />
        {/* infos */}
        <div className="flex flex-col md:pl-6 pr-6 w-full max-w-full font-spaceMono">
          <div className="flex justify-between items-center flex-col gap-3 lg:flex-row">
            <h1 className="font-bold text-2xl text-black dark:text-white leading-normal">
              {data.name}
            </h1>
            <h2 className="text-base font-normal leading-normal text-lightBlue dark:text-white">
              {formattedDate}
            </h2>
          </div>
          <p className="text-textTags text-base font-normal leading-normal pb-5 text-center lg:text-left">
            @{data.login}
          </p>
          <p className="text-textContent font-normal leading-6 pb-8 text-center lg:text-left">
            {data.bio}
          </p>
          <div
            className="flex justify-around items-center w-full mb-9 dark:bg-darkModeMainBg
             bg-lightWhite rounded-xl pb-4 pt-4"
          >
            <div className="flex flex-col items-center gap-0 ">
              <p className="text-textContent dark:text-white text-sm font-normal leading-normal">
                Repos
              </p>
              <p className="text-dashColor dark:text-white text-2xl font-bold leading-normal uppercase">
                {data.public_repos}
              </p>
            </div>
            <div className="flex flex-col items-center gap-0 ">
              <p className="text-textContent dark:text-white text-sm font-normal leading-normal">
                Followers
              </p>
              <p className="text-dashColor dark:text-white text-2xl font-bold leading-normal uppercase">
                {data.followers}
              </p>
            </div>
            <div className="flex flex-col items-center gap-0 ">
              <p className="text-textContent dark:text-white text-sm font-normal leading-normal">
                Following
              </p>
              <p className="text-dashColor dark:text-white text-2xl font-bold leading-normal uppercase">
                {data.following}
              </p>
            </div>
          </div>
          {/* icons */}
          <div className="flex items-center flex-col lg:flex-row  gap-4 pb-12">
            <div className="flex justify-between flex-col gap-3  w-[80%] max-w-full">
              <div className="flex gap-3 items-center">
                <img src={locationIcon} alt="locationIcon" />
                <h1 className="text-sm md:text-base font-normal leading-normal text-textContent  dark:text-white">
                  {data.location != "" ? data.location : "No Information"}
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <img src={companyIcon} alt="locationIcon" />
                <h1 className="text-sm md:text-base font-normal leading-normal text-textContent  dark:text-white">
                  {data.company != null ? data.company : "No Information"}
                </h1>
              </div>
            </div>
            <div className="flex justify-between flex-col gap-3 w-[80%] max-w-full">
              <div className="flex gap-3 items-center">
                <img src={websiteIcon} alt="locationIcon" />
                <a
                  href={data.blog != "" && data.blog}
                  className="text-sm md:text-base cursor-pointer font-normal leading-normal text-textContent  dark:text-white"
                >
                  {data.blog != "" ? data.blog : "No Information"}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <img src={twitterIcon} alt="locationIcon" />
                <h1 className="text-sm md:text-base font-normal leading-normal text-textContent  dark:text-white">
                  {data.twitter_username != null
                    ? data.twitter_username
                    : "No Information"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
