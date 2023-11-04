import React from 'react';
import {useParams} from "react-router-dom";


const ProfilePage = () => {
    let {user_id} = useParams();
    return (
        <div>
            <h1>Profile Page</h1>
            <h1>{user_id}</h1>
        </div>
    );
};

export default ProfilePage;