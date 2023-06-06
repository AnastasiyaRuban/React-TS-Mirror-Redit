import { useEffect, useState } from "react";
import { IUserData } from '../types/interfaces';
import axios from 'axios';

export function useUserData(token: String) {
    const [data, setData] = useState<IUserData>({});

    console.log(token);

    useEffect(() => {
        if (token && token.length > 0 && token !== 'undefined') {
            axios
                .get('https://oauth.reddit.com/api/v1/me.json', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    const userData = res.data;
                    setData({
                        name: userData.name,
                        iconImg: userData.icon_img.split('?')[0],
                    });
                })
                .catch(() => console.log('Error in hook useUserData'));
        }
    }, [token]);

    return [data]
}