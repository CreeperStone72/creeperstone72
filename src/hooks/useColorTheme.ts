import {useEffect, useState} from "react";

function useColorTheme(): [string, () => void] {
    const [colorTheme, setColorTheme] = useState('base');
    const [, updateState] = useState({});

    const updateTheme = () => updateState({});

    useEffect(() => {
        switch (location.hash.split('/')[1]) {
            case 'loic-dornel':
                setColorTheme('ldor');
                break;
            case 'creeperstone72':
                setColorTheme('cs72');
                break;
            case 'rooted-dm':
                setColorTheme('rtdm');
                break;
            default:
                setColorTheme('base');
        }
    }, [location.hash]);

    return [colorTheme, updateTheme];
}

export default useColorTheme;