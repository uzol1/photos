import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './profile/Profile'

const Profiles = (props) => {
    const [datas, setData] = useState([])

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json')
            .then((response) => {
                setData([...response.data])
            })
    }, [])


    const sortedPhotoArray = (photos) => {
        const sortOrder = ["google", "linkedin", "facebook", "twitter", "office365", "undefined"]
        let items = [...photos]

        items.sort(function (a, b) {
            return sortOrder.indexOf(a.source) - sortOrder.indexOf(b.source);
        });

        const urlArray = items.map((item) => {
            return item.url
        })
        return urlArray;
    }

    return (
        <div>
            <div className="row">
                {datas.map(data => {
                    return <Profile key={data.firstName} name={`${data.firstName} ${data.lastName}`} photos={sortedPhotoArray(data.photos)} />
                })}
            </div>
        </div>
    )
}

export default Profiles
