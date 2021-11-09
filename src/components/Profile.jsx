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
        return <div className="bg-app-card-light transition duration-300 dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg font-medium dark:text-white dark:shadow-dark-dreamy">Search for a user!</div>;
    }
    else if (status === 'No Result') {
        return <div className="bg-app-card-light transition duration-300 dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg font-medium dark:text-white dark:shadow-dark-dreamy">Woops! :( Try another one</div>
    }
        
    else {
        return (
            <div className="flex transition duration-300 bg-app-card-light dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg dark:shadow-dark-dreamy">
                <div className="w-1/4">
                    <div className="relative w-img-big h-img-big overflow-hidden rounded-full">
                         <img src={userData.avatar} className="inline align-middle h-full" alt="profile"></img>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-h1 font-bold leading-h1 transition duration-300 dark:text-white">{userData.name}</h1>
                        <h1 className="text-body leading-body text-app-gray transition duration-300 dark:text-white">{userData.joined_date}</h1>
                    </div>
                    <p className="text-h3 leading-h3 text-app-blue mb-7">{`@${userData.username}`}</p>
                    <p className="text-body leading-body mb-7 text-app-gray transition duration-300 dark:text-white">{userData.bio === null ? 'User has no Bio.' : userData.bio}</p>
                    <div className="grid grid-cols-3 grid-rows-1 bg-app-light-new transition duration-300 dark:bg-app-dark py-5 px-10 rounded-lg mb-7 dark:text-white">
                         <div>
                             <p className="text-h4 leading-h4 text-app-blueish transition duration-300 dark:text-white">Repos</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.repos}</p>
                         </div>
                         <div>
                             <p className="text-h4 leading-h4 text-app-blueish transition duration-300 dark:text-white">Followers</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.followers}</p>
                         </div>
                         <div className="pl-4">
                             <p className="text-h4 leading-h4 text-app-blueish transition duration-300 dark:text-white">Following</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.following}</p>
                         </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                         <div className="flex gap-3 items-center text-app-blueish">
                             <img src={theme==='dark' ? location_svg_light : location_svg_dark} alt="location logo"></img>
                             <p className={"" + (userData.location === null ? "text-gray-500" : "text-app-blueish transition duration-300 dark:text-white")}>{userData.location === null ? 'Not available' : userData.location}</p>
                         </div>
                         <div className="flex gap-3 items-center">
                             <img src={theme==='dark' ? twitter_logo_svg_light : twitter_logo_svg_dark} alt="twitter logo"></img>
                             <p className={"" + (userData.twitter === null ? "text-gray-500" : "text-app-blueish transition duration-300 dark:text-white")}>{userData.twitter === null ? 'Not Available' : userData.twitter}</p>
                         </div>
                         <div className="flex gap-3 items-center text-app-blueish transition duration-300 dark:text-white">
                             <img src={theme==='dark' ? weblink_svg_light : weblink_svg_dark} className="transition duration-300 dark:text-white" alt="weblink logo"></img>
                             <a href={userData.website} className="hover:underline" target="_blank" rel="noreferrer">{userData.website}</a>
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