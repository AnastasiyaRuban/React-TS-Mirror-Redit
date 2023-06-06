import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../shared/context/tokenContext';


export default function useCommentsData(id: String, token: String) {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if (token && token.length > 0 && token !== 'undefined') {
            axios
                .get(`https://oauth.reddit.com/comments/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    const commentsData = res.data
                    setPostData(commentsData);
                })
                .catch(() => console.log('error comments'));
        }
    }, [token, id])
    return [postData]
}
