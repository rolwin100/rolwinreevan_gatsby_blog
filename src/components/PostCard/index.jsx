import React from 'react';
import moment from 'moment';
import style from './postCard.module.less';
import { LikeOutlined } from '@ant-design/icons';

const PostCard = (props) => {
  const { data } = props;
  return (
    <div className={style.postCard}>
      <a href={"https://mehdio.medium.com/" + data.slug + "-" + data.medium_id}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(https://miro.medium.com/max/1000/${data.virtuals.previewImage.imageId})`,
          }}
        />
        <div className={style.mrTp20}>
          <p>
            <span className={style.dateHolder}>{data ? moment(data.updatedAt).format('MMM Do YYYY') : ''}</span>
          </p>
          <h3>{data ? data.title : ''}</h3>
          <p>{data ? data.virtuals.subtitle : ''}</p>
          <p><LikeOutlined /> {data ? data.virtuals.totalClapCount : ''}</p>
          <p style={{ color: '#ce6d96' }}>
            {
              data.virtuals.tags.map(tag_name => ` #${tag_name.name.replace(/ /g, "").toLowerCase()}`)
            }
          </p>
        </div>
      </a>
    </div>
  );
};

export default PostCard;
