import React from 'react';
import styles from './active-label.module.css';

interface IActiveLabelProps {
	children: React.ReactNode
}

export default function ActiveLabel({children}: IActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
};

