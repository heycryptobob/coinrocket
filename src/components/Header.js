import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.svg";
import { ConnectButton } from "./dapp/ConnectButton";

// const navigation = [
//   // { name: "Home", href: "#" },
//   // { name: "About", href: "#" },
// ];

function LanguageButton({ lng }) {

  const { i18n } = useTranslation()
  const isLanguage = () => lng.localeCompare(i18n.language) === 0
  const defaultKlass = 'mr-2 p-2 text-xs rounded-md uppercase font-semibold hover:cursor-pointer'

  const klass = isLanguage() ?
    `${defaultKlass} bg-slate-100 text-blue-400` :
    `${defaultKlass} text-slate-500`

  function handleClick() {
    if (!isLanguage()) {
      i18n.changeLanguage(lng)
    }
  }

  return (
    <div className={klass} onClick={() => handleClick()}>{lng}</div>
  )
}

function LanguageButtons() {

  const languages = [
    'en',
    'pt'
  ]

  return (
    <>
      {languages.map((lng, key) => <LanguageButton key={key} lng={lng} />)}
    </>
  )
}

export function Header() {
  return (
    <div className="container mx-auto p-6">
      <nav className="flex items-center justify-between flex-wrap bg-transparent">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src={Logo} alt="Logo" width="40" />
        </div>
        <ul className="flex justify-between">
          <div></div>
          <div className="flex items-center">
            <LanguageButtons />
            <ConnectButton />
          </div>
        </ul>
      </nav>
    </div>
  );
}
