import React, { useEffect } from 'react';
import Axios from 'axios';

function LandingPage() {

    useEffect(() => {
        Axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, [])

    return (
        <div>
            랜딩페이지 입니다.
        </div>
    )
}

export default LandingPage
