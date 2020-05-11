import React from 'react';


const TagCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  return (
    <div style={{
      marginTop: '20px',
      borderRadius: '20px',
      minHeight: '22rem',
      boxShadow: 'rgba(167, 167, 167, 0.22) -1px 4px 9px 3px',
    }}
    >
      <div style={{
        width: '100%',
        height: '164px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px 20px 0 0',
        backgroundSize: 'cover',
        backgroundImage: `url(${img})`,
      }}
      />
      <div style={{ padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: `${color}` }}>
            #
            {name}
          </h4>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TagCard;
