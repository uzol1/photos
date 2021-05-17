import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './profile/Profile'

const Profiles = (props) => {
    const [datas, setData] = useState([])
    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json').then((response) => {
            setData([...response.data])
        })
    }, [])
    const convertPhotos = (photos) => {
        const sortOrder = ["google", "linkedin", "facebook", "twitter", "office365", "undefined"]
        let items = [...photos]

        items.sort(function (a, b) {
            return sortOrder.indexOf(a.source) - sortOrder.indexOf(b.source);
        });
        const urls = items.map((item) => {
            return item.url
        })
        return urls;
    }

    const variable = datas.map(data => {
        return <Profile key={data.firstName} name={`${data.firstName} ${data.lastName}`} photos={convertPhotos(data.photos)} />
    })

    return (
        <div>
            <div className="row">
                {variable}
            </div>
            <div className="row">

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F71c2d10ca70e98abbfaa3527f08d3b5b6eeb0256fb3f697e2797fc3b7c1d4c1a.net%2Fstatic%2F7f8602a54193cc54b6666fc897919dcd_c6d458bc14d354f7b0a80bf0d61157f8eeae879be1a9c819c7b2fe2ee6b5a405"

                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F904284fb451e2705e846a5eb33d2525e31c6152e27844775dddb38e860744068.net%2Fstatic%2F9a554423fa506f23baeca13cabd47aa1_4deed7def9026cc71f053d3616899073be11f748dc202f3e8f9040aaeaabdd61"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F97d675e47750400a49225f5bd738d4331a215941945c67e861a56efd1e50e330.net%2Fstatic%2F40f746bdd92499849e65b5bd9d556ea8_d32a7312def7d9c8331657148d9b3875da9e28ddca66bd77a9c8e2a0ab3c33d9"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F5d50d73d6e72e54a8488d614f4975bbb005c04b1c44e091ab6c36b1f6727cf8b.net%2Fstatic%2F111d3c8501a0f3d48b9e2c3df927394c_c9d2dfbd031c04ddf4ea8645f6d07e63006aad6c5e702aa358f130a173b573ea"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F0028a3483f141f46f600b60a1d6b79d280721e37e013a3891c831bd8f3effaf7.net%2Fstatic%2Fb125f1db8a6012bc12dc57cad572db83_7e9030a5a5286bd4fa7f7a369967cc5e865a75f961586f94efddd7642d0cf9d4"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F0255fee1bbdbb54961d140a0b4ef0b9871bd59cc60b339b31350f6c43da87725.net%2Fstatic%2Fe7372f75b43b778dd661d88bf0998369_6bb2c057d14c64981352e57f8e019be816a1951f82e7a35331acf6730af93b67" alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F5e5d26d7385f6970ac009953b28352bcae7dbd3be806b9ee597dfec4e60d7e5b.net%2Fstatic%2F983267c86dfb4756f3f073eaca9142d3_04f22f2181ea1ee5af0aaff1ea9ffe69600a945e4588239211591a5ca63e21f0"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F92eb67acd070999402fe91b4fd3eecfd082e9455d4dee42bfdaca9f1b198c4d2.net%2Fstatic%2Fd2506559ed5f8cc966a81019cbeb032a_384ca720f3d2776c466b6ea6bb47549fd2647fd54e6b9f35a092eaf6fe018d68"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F65b1c036e2f9a7aaac53b7c46785966bd7f3e436d0425d21d1858a1756b5d496.net%2Fstatic%2F626a4c93642c85810d21373c30942ab7_ef39cd71b291fae2e7fda81f9bd1f98f8adf53146781a86c0d42d9c1f634f223"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div className="column-box" id="img">
                    <div className="image" >
                        <img src="https://referral-ai.s3.amazonaws.com/images%2F5dd5cbba94d4c102d3940ea79249700fcf4e2b27816cd3947230ebdd7e138c4d.net%2Fstatic%2F84250c984f63c6a6a4bb661b3098c21a_af82f6714b7e7e9627114a8aa3ae20b0c73f349c158269b05c069376a21bbcbb"
                            alt="https://picsum.photos/200/300" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profiles
