import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { PoolCard } from "./PoolCard";


export function PoolGroup({ group, pools }) {
  const { t } = useTranslation();
  const translationStr = `common.pools.groups.${group}`;

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-8">{t(translationStr)}</h2>
      { pools ? pools.map((pool, key) => <Suspense fallback="wait" key={key}><PoolCard key={key} pool={pool} /></Suspense>) : <></>}
    </div>
  );
}
