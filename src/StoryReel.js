import React from 'react'
import "./StoryReel.css";
import Story from './Story';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://image.freepik.com/free-photo/partnership-business-man-shaking-hands-with-effect-digital-network-link-connection-graphic-diagram-digital-global-technology-with-cityscape-background_33829-157.jpg"
            profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Adam Fox"
            />
            <Story 
            image="https://i.pinimg.com/originals/d5/c8/7c/d5c87c9160550d386791069339bbd762.jpg"
            profileSrc="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            title="Tyrone Smith"
            />
            <Story 
            image="https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg"
            profileSrc="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
            title="Sara Ice"
            />
            <Story 
            image="https://media.gettyimages.com/vectors/abstract-80s-style-retro-background-vector-id508089062"
            profileSrc="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"
            title="Kevin Hill"
            />
            <Story 
            image="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80"
            profileSrc="https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg"
            title="Tim Lone"
            />
        </div>
    )
}

export default StoryReel
