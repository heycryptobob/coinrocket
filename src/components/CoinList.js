import { forwardRef } from "react";
import {
  Telegram,
  Twitter,
  Discord,
  Medium,
} from "@styled-icons/boxicons-logos";
import { Globe, DotsHorizontalRounded } from "@styled-icons/boxicons-regular";
import { Card, Table, Spinner, Dropdown } from "react-bootstrap";
// import coins from "../coins-example";
import TimeAgo from "react-timeago";
import "./CoinList.css";
import bogtools from "../images/bogtools.svg";
import bscscan from "../images/bscscan.svg";
import pancakeswap from "../images/pancakeswap.svg";
import moment from "moment";
import { GET_COINS } from "../queries/getCoins";
import { useQuery } from "@apollo/client";
import { UpvoteButton } from "./UpvoteButton";

function ContractLinks({ contract }) {
  return (
    <>
      <CustomDropdownItem name="pancakeswap" social={{ url: `https://exchange.pancakeswap.finance/#/swap?outputCurrency=${contract.address}` }} />
      {/* <a
        href={`https://exchange.pancakeswap.finance/#/swap?outputCurrency=${contract.address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <img
          src={pancakeswap}
          width={20}
          height={20}
          alt="charts"
          className="text-muted"
        />
      </a>
      <a
        href={`https://bscscan.com/token/${contract.address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <img
          src={bscscan}
          width={20}
          height={20}
          alt="charts"
          className="text-muted"
        />
      </a>
      <a
        href={`https://charts.bogged.finance/?token=${contract.address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <img
          src={bogtools}
          width={20}
          height={20}
          alt="charts"
          className="text-muted"
        />
      </a> */}
    </>
  );
}

function CustomIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      width={20}
      height={20}
      className="text-muted"
    />
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case "telegram":
      return <Telegram size={20} className="text-muted" />;
    case "twitter":
      return <Twitter size={20} className="text-muted" />;
    case "discord":
      return <Discord size={20} className="text-muted" />;
    case "medium":
      return <Medium size={20} className="text-muted" />;
    case "bscscan":
      return <CustomIcon src={bscscan} alt="BSCScan" />;
    case "bogtools":
      return <CustomIcon src={bogtools} alt="BogTools" />;
    case "pancakeswap":
      return <CustomIcon src={pancakeswap} alt="PancakeSwap" />;
    default:
      return <Globe size={20} className="text-muted" />;
  }
}

function SocialLink({ name, social }) {
  if (social.url === "") return <></>;
  return (
    <a href={social.url} target="_blank" rel="noopener noreferrer">
      <SocialIcon name={name} />
    </a>
  );
}

function CustomDropdownItem({ name, social }) {
  if (social.url === "") return <></>;
  return (
    <Dropdown.Item
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-capitalize d-flex align-items-center"
    >
      <SocialIcon name={name} />
      <span className="ml-1">{name}</span>
    </Dropdown.Item>
  );
}

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  <button
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));

function CoinItem({ coin }) {
  return (
    <tr>
      <td className="align-middle">
        <div className="d-flex align-items-center">
          <img
            src={coin.logo.url}
            height="40"
            width="40"
            alt="logo"
            className="rounded-circle mr-3 d-none d-sm-block"
          />
          <div>
            <h6 className="mb-0">{coin.name}</h6>
            <p className="m-0">{coin.symbol}</p>
          </div>
        </div>
      </td>
      <td className="align-middle text-right d-none d-sm-table-cell">
        <TimeAgo date={coin.launch} />
      </td>
      <td className="align-middle text-right d-none d-sm-table-cell">
        <div className="d-flex align-items-center text-right justify-content-end">
          <SocialLink name="website" social={{ url: coin.website }} />
          <Dropdown className="ml-1">
            <Dropdown.Toggle as={CustomToggle}>
              <DotsHorizontalRounded size={20} className="text-muted" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(coin.social).map((key) => (
                <CustomDropdownItem
                  key={key}
                  name={key}
                  social={coin.social[key]}
                />
              ))}
              {moment().isAfter(moment(coin.launch)) ? (
                <ContractLinks contract={coin.contract} />
              ) : (
                <></>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </td>
      {/* <td className="align-middle text-right d-none d-sm-table-cell">
        {moment().isAfter(moment(coin.launch)) ? (
          <ContractLinks contract={coin.contract} />
        ) : (
          <></>
        )}
      </td> */}
      <td className="align-middle text-right">
        <UpvoteButton coin={coin} />
      </td>
    </tr>
  );
}

export function CoinList() {
  const { loading, error, data } = useQuery(GET_COINS, { pollInterval: 500 });

  return (
    <Card className="shadow border-0">
      <Card.Body>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="text-center">
            <p>Oops.. something unexpected happened!</p>
          </div>
        ) : (
          <Table borderless responsive>
            <thead>
              <tr>
                <th>Coin</th>
                <th className="text-right d-none d-sm-table-cell">Launch</th>
                {/* <th className="text-right d-none d-sm-table-cell">Social</th> */}
                <th className="text-right d-none d-sm-table-cell">Links</th>
                <th className="text-right">Vote</th>
              </tr>
            </thead>
            <tbody>
              {data.coins.map((coin) => (
                <CoinItem coin={coin} key={coin.id} />
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
}
