import React, { useEffect, useState } from "react";
import './ImageSlider.css';

const ImageSlider = () => {
    const [imageUrl, setImageUrl] = useState(""); // State to hold the current image URL

    const images = [
        "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2048774/pexels-photo-2048774.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    useEffect(() => {
        let i = 0; // Initialize the image index
        const interval = setInterval(() => {
            setImageUrl(images[i]); // Update the current image URL
            i = (i + 1) % images.length; // Increment index and reset to 0 if it exceeds the array length
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="ImageSlider-box">
            <img src={imageUrl} alt="Slideshow" className="imageSlide" />
            <div className="EventName">Event Name</div>
            <div className="headline">Some Glimpse of our past events</div>
        </div>
    );
};

export default ImageSlider;
