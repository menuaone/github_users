import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);
    const themeTxt = isDark ? 'Light' : 'Dark';
    const ThemeIcon = isDark ? SunIcon : MoonIcon;

    useEffect(
        () =>
            document.body.setAttribute('data-theme', isDark ? 'dark' : 'light'),
        [isDark]
    );
    return (
        <div className={styles.switcher} onClick={() => setDark(!isDark)}>
            <span>{themeTxt}</span>
            <ThemeIcon className={styles.icon} />
        </div>
    );
};
export default ThemeSwitcher;
