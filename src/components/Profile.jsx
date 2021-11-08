import React from 'react';
import arcane from '../assets/arcane.jpeg';

const Profile = () => {
    return (
       <div className="flex bg-app-card-light dark:bg-app-card-dark p-5">
           <div className="w-1/4 p-5">
               <div className="relative w-100 h-100 overflow-hidden rounded-full">
                    <img src={arcane} className="inline align-middle h-full" alt="profile"></img>
               </div>
           </div>
           <div className="flex-1">
            <div>

            </div>
           </div>
       </div>
    );
}
export default Profile;