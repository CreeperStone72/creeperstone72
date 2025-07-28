import '../styles/LanguageSwitch.css';
import {useTranslation} from "react-i18next";
import {useBoolean} from "usehooks-ts";

function LanguageSwitch() {
    const {i18n} = useTranslation();
    const {value, toggle, setFalse} = useBoolean(false);

    const languages: Map<string, string> = new Map<string, string>([
        ['en', '🇬🇧'],
        ['fr', '🇫🇷'],
    ]);

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setFalse();
    }

    return (
        <div id='language-switch'>
            <div
                id='select'
                onClick={toggle}
                style={{
                    backgroundColor: value ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                    borderTopLeftRadius: value ? '0.25em' : '50%',
                    borderTopRightRadius: value ? '0.25em' : '50%',
                    borderBottomLeftRadius: value ? '0' : '50%',
                    borderBottomRightRadius: value ? '0' : '50%',
                }}
            >
                {languages.get(i18n.language)}
            </div>
            <div id='options' style={{visibility: value ? 'visible' : 'collapse'}}>
                {languages.entries().map(([language, icon]) => (
                    <span key={language} onClick={() => handleLanguageChange(language)}>{icon}</span>
                ))}
            </div>
        </div>
    )
}

export default LanguageSwitch;