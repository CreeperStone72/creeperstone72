import {useEffect, useState} from "react";
import {Theme} from "../models";

function useTheme(): [Theme, (t: Theme) => void, () => void] {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme ?? 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return [theme, setTheme, toggleTheme];
}

export default useTheme;