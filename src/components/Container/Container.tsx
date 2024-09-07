import { ReactNode } from 'react';
import styles from './Container.module.scss';

export interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
    <div className={styles.container}>{children}</div>
);

export default Container;
