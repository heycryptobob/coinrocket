import { useEthers } from "@usedapp/core";
import { useTranslation } from "react-i18next";

function Account() {
  const { account } = useEthers();

  const text = `${account.substring(0,5)}...${account.substring(account.length-3, account.length)}`

  const klass =
    "text-xs -mr-14 pr-16 uppercase font-bold border pl-4 py-2 rounded-full text-neutral-800 bg-transparent border-neutral-800";

  return <div className={klass}>{text}</div>;
}

function Button() {
  const { t, i18n } = useTranslation();
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const text = account ? t('common.disconnect') : t('common.connect');
  const baseKlass =
    "uppercase font-bold px-8 py-2 rounded-full hover:cursor-pointer border";

  const connectKlass = "bg-emerald-500 hover:bg-emerald-400 text-white border-emerald-500 hover:border-emerald-400"
  const disconnectKlass = "bg-white hover:bg-red-400 hover:text-white border-neutral-800 hover:border-red-400"

  const klass = baseKlass + " " + (account ? disconnectKlass : connectKlass)

  function handleClick() {
    account ? deactivate() : activateBrowserWallet();
  }

  return (
    <button onClick={() => handleClick()} className={klass}>
      {text}
    </button>
  );
}

export function ConnectButton() {
  const { account } = useEthers();

  return (
    <div className="flex items-center">
      {account ? <Account /> : <></>}
      <Button />
    </div>
  );
}
