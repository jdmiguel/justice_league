import React from 'react';

/** Components */
import BarChats from './BarChats';

/** Models */
import { skillsModel } from '../../utils/models';

const Skills = ({ data: { stats, powers } }) => (
  <div className="character-skills">
    <div className="character-powers">
      <h3>{powers.title}</h3>
      <ul>
        {powers.data.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="character-stats">
      <h3>{stats.title}</h3>
      <ul>
        {stats.data.map(item => (
          <li key={item.title}>
            <strong>{`${item.title}`}</strong>
            <span>{`${item.value}`}</span>
            <BarChats value={item.value} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Skills.propTypes = {
  data: skillsModel
};

export default Skills;
