import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './profile/Profile'
import { sortedPhotoArray } from '../shared/utility'

const Profiles = (props) => {
    const [datas, setData] = useState([])

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json')
            .then((response) => {
                setData([...response.data])
            })
    }, [])

    return (
        <div>
            <div className="row">
                {datas.map(data => {
                    return <Profile
                        key={data.firstName} name={data.lastName ? `${data.firstName} ${data.lastName}` : `${data.firstName}`}
                        photos={sortedPhotoArray(data.photos)}
                    />
                })}
            </div>
        </div>
    )
}

export default Profiles
