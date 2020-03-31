import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import style from './postCard.module.less'

const PostCard = (props) => {
    const data = props.data.node.frontmatter;

    return <div className={style.postCard}>
        <Link to={data.path}>
            <div className={style.postCardImg} style={{
                backgroundImage: `url(${data ? data.cover.childImageSharp.fluid.src : ''})`,
            }}></div>
            <div className={style.mrTp20}>
                <p>
                    <span className={style.dateHolder}>{data ? moment(data.date).format('MMM Do YYYY') : ''}</span>
                </p>
                <h3>{data ? data.title : ''}</h3>
                <p>{data ? data.excerpt : ''}</p>
                <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
                    {
                        `#${data.tags.join(' #')}`
                    }
                </p>
            </div>
        </Link>
    </div>
}

export default PostCard;