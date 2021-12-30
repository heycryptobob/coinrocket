import Countdown from "react-countdown";
import bnb from "cryptocurrency-icons/svg/color/bnb.svg";
import usdc from "cryptocurrency-icons/svg/color/usdc.svg";
import { useTranslation } from "react-i18next";

function CurrencyIcon({ currency }) {
  let src = "";
  switch (currency) {
    case "BNB":
      src = bnb;
      break;
    case "USDC":
      src = usdc;
      break;
    default:
      break;
  }
  return <img src={src} alt={currency} className="h-5" />;
}

function PoolStatus({ pool }) {

  const { t } = useTranslation()

  const currentTime = new Date();
  const openingTime = new Date(pool.openingTime);
  const closingTime = new Date(pool.closingTime);
  let date = null;
  let text = "";
  let subtext = ""

  if (currentTime < openingTime) {
    // UPCOMING before openingTime
    text = "common.pools.status.start";
    date = openingTime;
  } else if (currentTime >= openingTime && currentTime < closingTime) {
    // ACTIVE after openingTime, before closingTime
    text = "common.pools.status.end";
    date = closingTime;
  } else if (currentTime > closingTime) {
    // AWAITING after closingTime
    text = "common.pools.status.distribution";
    if (pool.isDistributed) {
      // DISTRIBUTED distributed TRUE
      subtext = "common.pools.status.distributed";
    } else {
      // DISTRIBUTED distributed FALSE
      subtext = "common.pools.status.awaiting";
    }
  } else {
    console.error(`Can't sort pool: ${pool.title}`);
    return <></>;
  }

  if (date) {
    return (
      <div className="text-right">
        <div className="text-gray-600 text-xs">{t(text)}</div>
        <div>
          <Countdown date={date} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-right">
        <div className="text-gray-600 text-xs">{t(text)}</div>
        <div>
          {t(subtext)}
        </div>
      </div>
    );
  }
}

function PoolDetails({ pool }) {

  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-2 my-3">
      <div>
        <div className="text-gray-600 text-xs">{t("common.pools.total_raise")}</div>
        <div className="flex flex-row items-center">
          <CurrencyIcon currency={pool.currency} />
          <span className="ml-1">{pool.hardCap.toLocaleString()}</span>
        </div>
      </div>
      <PoolStatus pool={pool} />
    </div>
  );
}

export function PoolCard({ pool }) {
  // console.log(pool);
  const { t } = useTranslation()

  return (
    <div className="border rounded-2xl border-gray-200 grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src={pool.poolImage?.url}
          className="rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none w-full h-full object-cover"
          alt={pool.title}
        />
        {/* <span className="">1 Day</span> */}
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-blue-900 font-bold text-lg">{pool.title}</h3>
          <p className="text-gray-500 text-ellipsis overflow-hidden h-12">
            {pool.subtitle}
          </p>
        </div>
        <PoolDetails pool={pool} />
        <a
          href="/#"
          className="rounded-xl p-4 text-center bg-emerald-500 hover:bg-emerald-400 text-white border-emerald-500 hover:border-emerald-400"
        >
          {t("common.pools.more_details")}
        </a>
      </div>
    </div>
  );
}
