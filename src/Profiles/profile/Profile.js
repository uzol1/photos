
import React, { useState, useEffect } from 'react'
import './Profile.css'


const Profile = (props) => {
    console.log(props.photos)
    var testData = "";
    const [url, setUrl] = useState("");

    function getImageOrFallback(url, fallback) {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = url
            img.onload = () => resolve(url)
            img.onerror = () => {
                reject(`reject`)
            }

        })
    }
    useEffect(() => {
        let testData = "";
        for (let i = 0; i < props.photos.length; i++) {
            getImageOrFallback(props.photos[i], "picsum.photo").then(validUrl => {
                if (!testData) {
                    setUrl(validUrl)
                    testData = validUrl;
                }
            }).catch((msg) => { console.log("rejected") })

        }
    }, [props.photos])

    // const getImage = (props) => {
    //     for (let i = 0; i < props.photos.length; i++) {
    //         getImageOrFallback(props.photos[i], "https://picsum.photos/400/300").then(validUrl => {

    //             console.log('valid', validUrl)
    //             return validUrl

    //         })

    //     }
    // }
    // let img;
    // function checkIfImageExists(url, callback) {
    //     console.log("loop", url)
    //     const img = new Image();

    //     img.src = url;

    //     img.onload = () => {
    //         callback(true, url);
    //     };
    //     img.onerror = () => {
    //         callback(false);
    //     };

    // }


    // for (let i = 0; i < props.photos.length; i++) {

    //     checkIfImageExists(props.photos[i], (exists, url) => {

    //         if (!testData) {
    //             console.log('exists', url)
    //             testData = url;
    //             setUrl(url)
    //             console.log('testdata', testData)

    //         }
    //     })
    // }
    // for (let i = 0; i < props.photos.length; i++) {
    //     checkIfImageExists(props.photos[i], (exists, url) => {
    //         if (!testData) {
    //             console.log('exists', url)
    //             testData = url;
    //             setUrl(url)

    //         }
    //     })

    // }


    return (

        <div className="column-box" id="img">
            <div className="image" >
                <div id="img">
                    <img src={url} />
                    {/* <img src={getImage(props)} /> */}

                </div>
                {/* <img src={testData} alt={testData} /> */}
            </div>
            <div className="text">
                <h5 style={{ margin: "0", fontWeight: "40" }}>{props.name}</h5>
            </div>
        </div>


    )


}
function checkImage(img) {
    if (!img.complete) {
        return false;
    }
    if (img.naturalWidth === 0) {
        return false;
    }
    return true;
}

// function checkIfImageExists(urls) {
//     const img = new Image();

//     var errorCnt = 0;
//     img.onLoad = () => {
//         console.log('its working')
//         if (!checkImage(img)) {
//             if (errorCnt < urls.length) {
//                 var io = urls[++errorCnt];
//                 img.src = io;
//             }
//         }
//     }
//     img.src = urls[errorCnt];

//     return img.src;

// }



export default Profile
