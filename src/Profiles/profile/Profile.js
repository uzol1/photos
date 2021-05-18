
import React, { useState, useEffect } from 'react'
import './Profile.css'


const Profile = (props) => {

    const [url, setUrl] = useState("");

    const checkImage = path =>
        new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ path, status: "ok" });
            img.onerror = () => resolve({ path, status: "error" });
            img.src = path;
        });

    useEffect(() => {

        var testData = "";
        for (let i = 0; i < props.photos.length; i++) {
            checkImage(props.photos[i]).then((urls) => {
                if (urls.status === "ok" && !testData) {
                    testData = urls.path
                    setUrl(urls.path)
                }
            }).catch((error) => { })
        }

    }, [props.photos])


    return (
        <div className="column-box" id="img">
            <div className="image" >
                <div id="img">
                    <img src={url} alt={url} />
                </div>
            </div>
            <div className="text">
                <h5 >{props.name}</h5>
            </div>
        </div>
    )

}


export default Profile
