import React from 'react';
import location_svg_dark from "../assets/location_dark.svg";
import weblink_svg_dark from "../assets/weblink_dark.svg";
import twitter_logo_svg_dark from "../assets/twitter_logo_dark.svg";
import location_svg_light from "../assets/location_light.svg";
import weblink_svg_light from "../assets/weblink_light.svg";
import twitter_logo_svg_light from "../assets/twitter_logo_light.svg";
import { useUserData } from '../context/UserContext';


const Profile = () => {
    const { userData, status, theme } = useUserData();
    
    if (status === 'init') {
        return <div className="bg-app-card-light transition-all duration-300 dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg font-medium dark:text-white dark:shadow-dark-dreamy">Search for a user!</div>;
    }
    else if (status === 'No Result') {
        return <div className="bg-app-card-light transition-all duration-300 dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg font-medium dark:text-white dark:shadow-dark-dreamy"><span className="text-red-600 font-bold text-h3">No result</span> 😵 Try another one</div>
    }
        
    else {
        return (
            <div className="flex md:block transition-all duration-300 bg-app-card-light dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg dark:shadow-dark-dreamy">
                <div className="w-1/4 md:hidden">
                    <div className="relative w-img-big h-img-big overflow-hidden rounded-full">
                         <img src={userData.avatar} className="inline align-middle h-full" alt="profile"></img>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center md:justify-start md:gap-10 sm:gap-6 md:mb-7 sm:mb-0">
                        <div className="hidden sm:block sm:w-img-small sm:h-img-small md:block relative w-img-big h-img-big overflow-hidden rounded-full">
                            <img src={userData.avatar} className="inline align-middle h-full" alt="profile"></img>
                        </div>
                        <div>
                            <h1 className="sm:text-body sm:leading-normal md:mt-5 text-h1 font-bold leading-h1 transition-all duration-300 dark:text-white">{userData.name}</h1>
                            <p className="hidden sm:text-h4 sm:leading-normal md:block text-h3 leading-h3 text-app-blue">{`@${userData.username}`}</p>
                            <h1 className="hidden sm:text-h4 sm:leading-normal md:block md:mb-7 text-body leading-body text-app-gray transition-all duration-300 dark:text-white">{userData.joined_date}</h1>
                        </div>
                        <h1 className="block md:hidden text-body leading-body text-app-gray transition-all duration-300 dark:text-white">{userData.joined_date}</h1>
                    </div>
                    <p className="md:hidden text-h3 leading-h3 text-app-blue mb-7">{`@${userData.username}`}</p>
                    <p className="sm:text-h4 sm:leading-normal text-body leading-body mb-7 text-app-gray transition-all duration-300 dark:text-white">{userData.bio === null ? 'User has no Bio.' : userData.bio}</p>
                    <div className="grid grid-cols-3 grid-rows-1 bg-app-light-new transition-all duration-300 dark:bg-app-dark py-5 px-10 rounded-lg mb-7 dark:text-white">
                         <div>
                             <p className="sm:leading-normal text-h4 leading-h4 text-app-blueish transition-all duration-300 dark:text-white">Repos</p>
                             <p className="sm:text-h3 sm:leading-normal text-h2 leading-h2 font-bold">{userData.repos}</p>
                         </div>
                         <div>
                             <p className="text-h4 leading-h4 text-app-blueish transition-all duration-300 dark:text-white">Followers</p>
                             <p className="sm:text-h3 sm:leading-normal text-h2 leading-h2 font-bold">{userData.followers}</p>
                         </div>
                         <div className="pl-4">
                             <p className="text-h4 leading-h4 text-app-blueish transition-all duration-300 dark:text-white">Following</p>
                             <p className="sm:text-h3 sm:leading-normal text-h2 leading-h2 font-bold">{userData.following}</p>
                         </div>
                    </div>
                    <div className="grid sm:grid-cols-1 sm:grid-rows-3 grid-cols-2 grid-rows-2 gap-4">
                         <div className="flex gap-3 items-center text-app-blueish">
                             <img src={theme==='dark' ? location_svg_light : location_svg_dark} alt="location logo"></img>
                             <p className={"sm:hidden " + (userData.location === null ? "text-gray-500" : "text-app-blueish transition-all duration-300 dark:text-white")}>{userData.location === null ? 'Not available' : userData.location}</p>
                             <p className="hidden sm:block text-h3 leading-normal text-app-blueish transition-all duration-300 dark:text-white">{userData.location === null ? 'Not Available' : userData.location}</p>
                         </div>
                         <div className="flex gap-3 items-center">
                             <img src={theme==='dark' ? twitter_logo_svg_light : twitter_logo_svg_dark} alt="twitter logo"></img>
                             <p className={"sm:hidden " + (userData.twitter === null ? "text-gray-500" : "text-app-blueish transition-all duration-300 dark:text-white")}>{userData.twitter === null ? 'Not Available' : userData.twitter}</p>
                             <p className="hidden sm:block sm:text-sm sm:leading-normal text-app-blueish transition-all duration-300 dark:text-white">{userData.twitter === null ? 'Not Available' : userData.twitter}</p>
                         </div>
                         <div className="flex gap-3 items-center text-app-blueish transition-all duration-300 dark:text-white">
                             <img src={theme==='dark' ? weblink_svg_light : weblink_svg_dark} className="transition-all duration-300 dark:text-white" alt="weblink logo"></img>
                             <a href={userData.website} className="hover:underline sm:text-h3 sm:leading-normal" target="_blank" rel="noreferrer">{userData.website}</a>
                         </div>
     
                    </div>
                 <div>
     
                 </div>
                </div>
            </div>
         );
    }
    
}
export default Profile;