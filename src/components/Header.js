import Logo from "../assets/Logo.svg";
import { ConnectButton } from "./dapp/ConnectButton";

// const navigation = [
//   // { name: "Home", href: "#" },
//   // { name: "About", href: "#" },
// ];

export function Header() {
  return (
    <div className="container mx-auto p-6">
      <nav className="flex items-center justify-between flex-wrap bg-transparent">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src={Logo} alt="Logo" width="40" />
        </div>
        <ul className="flex justify-between">
          <div></div>
          <div>
            <ConnectButton />
          </div>
        </ul>
      </nav>
    </div>
  );
}
