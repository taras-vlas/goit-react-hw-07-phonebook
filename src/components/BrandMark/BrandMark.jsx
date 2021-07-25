import React, { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './BrandMark.module.scss';

const BrandMark = () => {
  const itemRef = createRef(null);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames={styles}
      nodeRef={itemRef}
    >
      <h1 className={styles.title} ref={itemRef}>
        Phonebook
      </h1>
    </CSSTransition>
  );
};

export default BrandMark;