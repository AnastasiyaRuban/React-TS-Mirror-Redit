import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPostData } from '../types/interfaces';

export function usePostsData(token: String) {
  const [data, setData] = useState<Array<IPostData>>([]);

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const postsData = res.data.data.children.map(
            (item: { data: any }) => ({
              id: item.data.id,
              author: item.data.author,
              title: item.data.title,
              rating: item.data.ups,
              avatar: item.data.sr_detail.icon_img
                ? item.data.sr_detail.icon_img
                : 'http://mir-avatarok.3dn.ru/_pu/0/95004011.jpg',
              previewImg: item.data.preview
                ? item.data.preview.images?.[0].source.url.replace(
                  /(\&amp\;)/g,
                  '&'
                )
                : 'http://mir-avatarok.3dn.ru/_pu/0/s14222777.jpg',
              datePostUtc: item.data.created_utc,
            })
          );
          setData(postsData);
        })
        .catch(() => console.log('Error in hook usePostData'));
    }
  }, [token]);

  return [data];
}
