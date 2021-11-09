import React from 'react';
import location_svg from "../assets/location.svg";
import weblink_svg from "../assets/weblink.svg";
import twitter_logo_svg from "../assets/twitter_logo.svg";
import { useUserData } from '../context/UserContext';


const Profile = () => {
    const { userData, status } = useUserData();
    
    if (status === 'init') {
        return <div className="bg-app-card-light dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg">Search for a user!</div>;
    }
    else if (status === 'No Result') {
        return <div className="bg-app-card-light dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg">Woops! :( Try another one</div>
    }
        
    else {
        return (
            <div className="flex bg-app-card-light dark:bg-app-card-dark p-10 shadow-dreamy rounded-lg">
                <div className="w-1/4">
                    <div className="relative w-img-big h-img-big overflow-hidden rounded-full">
                         <img src={userData.avatar} className="inline align-middle h-full" alt="profile"></img>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-h1 font-bold leading-h1">{userData.name}</h1>
                        <h1 className="text-body leading-body">{userData.joined_date}</h1>
                    </div>
                    <p className="text-h3 leading-h3 text-app-blue mb-7">{`@${userData.username}`}</p>
                    <p className="text-body leading-body mb-7">{userData.bio === null ? 'User has no Bio.' : userData.bio}</p>
                    <div className="grid grid-cols-3 grid-rows-1 bg-app-light dark:bg-app-dark py-5 px-10 rounded-lg mb-7">
                         <div>
                             <p className="text-h4 leading-h4">Repos</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.repos}</p>
                         </div>
                         <div>
                             <p className="text-h4 leading-h4">Followers</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.followers}</p>
                         </div>
                         <div className="pl-4">
                             <p className="text-h4 leading-h4">Following</p>
                             <p className="text-h2 leading-h2 font-bold">{userData.following}</p>
                         </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                         <div className="flex gap-3 items-center">
                             <img src={location_svg} alt="location logo"></img>
                             <p>{userData.location === null ? 'Not available' : userData.location}</p>
                         </div>
                         <div className="flex gap-3 items-center">
                             <img src={twitter_logo_svg} alt="twitter logo"></img>
                             <p>{userData.twitter === null ? 'Not Available' : userData.twitter}</p>
                         </div>
                         <div className="flex gap-3 items-center">
                             <img src={weblink_svg} alt="weblink logo"></img>
                             <p>{userData.website}</p>
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