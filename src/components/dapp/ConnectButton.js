import { useEthers } from "@usedapp/core";

function Account() {
  const { account } = useEthers();

  const text = `${account.substring(0,5)}...${account.substring(account.length-3, account.length)}`

  const klass =
    "text-xs -mr-14 pr-16 uppercase font-bold border pl-4 py-2 rounded-full text-neutral-800 bg-transparent border-neutral-800";

  return <div className={klass}>{text}</div>;
}

function Button() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const text = account ? "Disconnect" : "Connect";
  const klass =
    "uppercase font-bold border px-8 py-2 rounded-full text-neutral-800 hover:text-white bg-white border-neutral-800 hover:bg-neutral-800 hover:cursor-pointer";

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
