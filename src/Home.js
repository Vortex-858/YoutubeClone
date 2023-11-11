
import kalank from './images/kalank.jpg'
import avtar from './images/avtar.png'
import tseries from './images/tseries.png'
import bbkivines from './images/bb.jpg'
import carry from './images/carry.png'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {MdOutlineSubscriptions, MdOutlineWatchLater} from 'react-icons/md'
import {BiSolidVideos, BiHistory} from 'react-icons/bi'

import Header from './Header'
import { Link } from 'react-router-dom';

import videosJson from './useful-data-main/videos.json'


function VideoGrid(props){
    let myVideo = props.myVideo;
    return (
        <div class="thumbnail">
            <div class="video">
            <Link to={`/video?id=${myVideo.id}`}><img class="thumbnail-home" src={myVideo.thumbnail.url} /></Link>
            </div>
            <div class="video-title">
                <div>
                        <img src={avtar} height={'30px'} width={'30px'}></img>
                    
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">
                       
                        {myVideo.title}
                    </h4>
                    <p class="margin-0 smaller-fontsize">
                       
                        {myVideo.channelName}
                    </p>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.views} views . {myVideo.uploadedAt} ago</p>
                </div>
            </div>
        </div>
    );
}

function Home(){
    
    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BsFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={carry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Carry Minati</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={bbkivines} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">BB ki Vines</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={tseries} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">T-Series</span>
                    </button>
                </div>
                <div class="main-right independent-scroll">
                    {videosJson.map((video) => {
                        return <VideoGrid myVideo={video}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;