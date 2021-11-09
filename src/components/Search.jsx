import React, { useRef } from 'react';
import search_logo from '../assets/search.svg';
import { Octokit } from '@octokit/core';
import { user } from '../components/UserObject';
import { useUserData } from '../context/UserContext';

const Search = () => {
    const usernameRef = useRef();
    const { setUserData, status, setStatus } = useUserData();
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN});

    const handleSearchClick = (e) => {
        e.preventDefault();
        octokit.request(`GET /users/${usernameRef.current.value}`)
            .then(response => {
                user.name = response.data.name;
                user.avatar = response.data.avatar_url;
                user.username = response.data.login;
                user.bio = response.data.bio;
                user.repos = response.data.public_repos;
                user.followers = response.data.followers;
                user.following = response.data.following;
                user.location = response.data.location;
                user.website = response.data.html_url;
                user.twitter = response.data.twitter_username;
                user.setJoinedDate(response.data.created_at);
                setUserData({...user});
                setStatus('')
            })
            .catch(err => {
                setStatus('No Result');
                setUserData({});
            })
    }

    return (
        <div className="flex justify-between items-center bg-app-card-light p-2 mb-7 rounded-lg transition-all duration-300 dark:shadow-dark-dreamy shadow-dreamy dark:bg-app-card-dark">
            <div className="flex items-center gap-7">
                <img className="pl-3" src={search_logo} alt="search logo"></img>
                <input className="sm:text-h3 sm:leading-normal md:focus:ring-2 md:focus:ring-blue-500 text-search transition-all duration-300 focus:placeholder-opacity-0 dark:text-white dark:bg-app-card-dark w-full h-10 focus:outline-none placeholder-search dark:placeholder-white rounded-md" ref={usernameRef} placeholder="Search Github Username..."></input>
                
            </div>
            <div className="flex items-center">
                <p className="md:hidden text-red-600 font-bold text-h3 mr-5">{status === 'No Result' ? status : ''}</p>
                <div onClick={handleSearchClick} className="sm:text-h3 sm:leading-normal bg-app-blue py-3 px-5 text-h3 font-medium text-white rounded-lg transition-all duration-300 hover:cursor-pointer hover:bg-app-lightblue">Search</div>
            </div>
        </div>
    );
}

export default Search;