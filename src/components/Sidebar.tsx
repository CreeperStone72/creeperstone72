import {NavLink} from "react-router-dom";
import '../styles/Sidebar.css';
import {ThemeToggle} from ".";
import {useDarkMode} from "usehooks-ts";
import Menu from '../data/menu.json';
import '../i18n';
import {useTranslation} from "react-i18next";
import {GrClose} from "react-icons/gr";
import {AiFillHome} from 'react-icons/ai';
import {useEffect, useState} from "react";

type Props = {
    collapsed: boolean;
    onClose: () => void;
}

function Sidebar({ collapsed, onClose }: Props) {
    const {t} = useTranslation();
    const {isDarkMode} = useDarkMode();
    const theme = isDarkMode ? 'dark' : 'light';
    const [colorTheme, setColorTheme] = useState('base');
    const [, updateState] = useState({});

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

    return (
        <nav
            className={`sidebar ${(collapsed ? 'collapsed' : '')}`}
            style={{backgroundColor: `var(--primary-${colorTheme}-${(isDarkMode ? 700 : 300)})`}}
        >
            <div>
                <GrClose className='menu-button' onClick={onClose} />
                <div id='header' style={{display: 'flex', justifyContent: 'space-between'}}>
                    <NavLink to='/' end onClick={() => updateState({})}>
                        <AiFillHome />
                    </NavLink>
                    <ThemeToggle />
                </div>
                {Menu.map((section) => (
                    <div key={section.name}>
                        <h3 style={{color: isDarkMode ? 'white' : 'black'}}>
                            {t(section.name)}
                        </h3>
                        <ul>
                            {section.routes.map((route) => (
                                <li
                                    key={`${section.root}${route.path}-${Date.now()}`}
                                    style={{color: `var(--${theme}-800`}}
                                >
                                    <NavLink
                                        to={`${section.root}${route.path}`}
                                        style={({isActive}) => {
                                            return {
                                                color: isActive ? isDarkMode ? 'white' : 'black' : `var(--${theme}-800)`,
                                                fontWeight: isActive ? 'bold' : '',
                                            };
                                        }}
                                        end
                                        onClick={() => updateState({})}
                                    >
                                        {t(route.key)}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;