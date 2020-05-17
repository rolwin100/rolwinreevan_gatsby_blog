import React from 'react';

const TechSkill = (props) => {
  const {textH4, textH3, icon
  } = props;
  return (
      <div className={`textLeft `}>
        <h3>{icon} {textH3 || '' }</h3>
        <h4>{ textH4 || ''}</h4>
      </div>
  );
};

export default TechSkill;
