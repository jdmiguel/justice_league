import React from 'react';

import Icon from '../core/icon';
import { BatmanIcon } from '../../utils/svgs';

export default () => (
  <footer>
    <Icon svg={BatmanIcon} width="50px" height="50px" />
    <div className="created">
      <h3>
        Created by{' '}
        <a
          href="https://jcoder.eu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
        >
          jcoder
        </a>
      </h3>
    </div>
    <div className="based">
      <h4>Based on DC characters</h4>
    </div>
  </footer>
);
