import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModalMain];
  if (visible) {
    rootClasses.push(classes.myModal_active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
