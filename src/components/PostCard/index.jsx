import React from 'react'

const PostCard = (props) => {
    return <div style={{ marginTop: '20px', cursor: 'pointer' }}>
        <div style={{
            width: '100%',
            height: '164px',
            backgroundImage: `url(${ props.data ? props.data.node.frontmatter.cover.childImageSharp.fluid.src : ''})`,
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            boxShadow: '1px 3px 16px #a7a7a7',
            backgroundSize: 'cover'
        }}></div>
        <div style={{ marginTop: '20px' }}>
            <p><span style={{
                background: '#ebbaa1',
                color: 'white',
                padding: '6px',
                borderRadius: '7px',
                fontSize: '11px'
            }}>
                Jan 06, 2020</span></p>
            <h3>{props.data ? props.data.node.frontmatter.title : ''}</h3>
            <p>{props.data ? props.data.node.frontmatter.excerpt : ''}</p>
            <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>#javascript #angular #nodeJS #reactJS</p>
        </div>
    </div>
}

export default PostCard;