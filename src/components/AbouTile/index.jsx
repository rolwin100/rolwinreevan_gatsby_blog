import React from 'react';
import style from './about.module.less';
import Skills from '../PageFragments/HomePage/SkillProgress';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width, githubSrc,
    javascript, reactjs, gatsby, nodejs, python, mysql, mongodb, wordpress, shell, docker
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <img
          src={`../${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{textH3 || '' }</h3>
        <p>{ textH4 || ''}</p>
      </div>
        <Skills javascript={javascript} 
          reactjs={reactjs} 
          gatsby={gatsby} 
          nodejs={nodejs}
          python={python}
          mysql={mysql}
          mongodb={mongodb}
          wordpress={wordpress}
          docker={docker}
          shell={shell}/>
      <div className="githubBtn">
        <a href={githubSrc}>View on GitHub</a>
      </div>
    </div>
  );
};

export default AboutTile;
