import React from 'react';
import Button from '../Button/Button';
import styles from './App.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../styles/stylButton.scss'
class App extends React.Component {
  render() {
    const buttonError = true;
    const buttonAccept = true;
    return (
      <div className={styles.component}>
        
        <Button  />
      </div>
    )
  }
}

export default App;