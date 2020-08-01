import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = ({
  javascript, reactjs, gatsby, nodejs, python, mysql, mongodb, wordpress, shell, docker
}) => (
  <div>
    {/* <h2>My Skills</h2> */}

        {
          javascript && <ProgressBar
            percent={parseInt(javascript)}
            text="Javascript"
          />
        }

        {
          reactjs && <ProgressBar
          percent={parseInt(reactjs)}
          text="ReactJS"
        />
        }

        {
          gatsby && <ProgressBar
          percent={parseInt(gatsby)}
          text="Gatsby"
        /> 
        }
        
        {
          nodejs && <ProgressBar
            percent={parseInt(nodejs)}
            text="NodeJS"
          /> 
        }

        
        {
          python && <ProgressBar
            percent={parseInt(python)}
            text="Python"
          /> 
        }

        {
          mysql && <ProgressBar
          percent={parseInt(mysql)}
          text="Mysql"
        />
        }
        
        { 
          mongodb && <ProgressBar
            percent={parseInt(mongodb)}
            text="MongoDB"
          />
        }
        
        {
          wordpress && <ProgressBar
            percent={parseInt(wordpress)}
            text="Wordpress"
          />
        }

        {
          shell && <ProgressBar
            percent={parseInt(shell)}
            text="Shell"
          />
        }

        {
          docker && <ProgressBar
            percent={parseInt(docker)}
            text="Docker"
          />
        }
        
  </div>
);

export default SkillsProgress;
