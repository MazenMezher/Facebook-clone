import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://images.interactives.dk/shutterstock_245163850-1-axkokcc1_5ggif3skctjcg-DFcygg6HO_y0WdmrlCREJw.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&h=450&ixjsv=2.2.4&q=38"
                message="Wow this works"
                timestamp="Tis is a timestamp"
                username="Henry"
                image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
            />
            <Post 
                profilePic="https://images.interactives.dk/shutterstock_245163850-1-axkokcc1_5ggif3skctjcg-DFcygg6HO_y0WdmrlCREJw.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&h=450&ixjsv=2.2.4&q=38"
                message="Wow this works"
                timestamp="Tis is a timestamp"
                username="Henry"
            />
            <Post />
        </div>
    )
}

export default Feed
