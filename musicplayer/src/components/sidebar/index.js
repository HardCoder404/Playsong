import React, { useEffect, useState } from 'react'
import './sidebar.css';
import Sidebarbutton from './Sidebarbutton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire,FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../spotify';

export default function Sidebar() {
    const [image,setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png");

    useEffect(()=>{
        apiClient.get("me").then((response) => {
        setImage(response.data.images[0].url);
        }); 
    },[]);

  return (
    <div className='sidebar-container'>
     <img src={image} alt="spotify" className='pofile-img' />

    <div>
        <Sidebarbutton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
        <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire/>} />
        <Sidebarbutton title="Player" to="/player" icon={<FaPlay/>} />
        <Sidebarbutton title="Favorites" to="/favorites" icon={<MdFavorite/>} />
        <Sidebarbutton title="Library" to="/" icon={<IoLibrary/>} />
        
    </div>
        <Sidebarbutton title="Sign Out" to="" icon={<FaSignOutAlt/>} />
    
    </div>
  )
}
