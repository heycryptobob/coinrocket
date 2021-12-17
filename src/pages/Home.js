import { useTranslation } from "react-i18next";
import { SocialIcon } from "react-social-icons";

const socials = [
  { network: "telegram", url: "https://t.me" },
  { network: "twitter", url: "https://twitter.com" },
  { network: "instagram", url: "https://instagram.com" },
];

const groups = [
  "active",
  "upcoming",
  "awaiting",
  "distributed",
]

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-gradient-to-r from-blue-900 to-violet-700">
      <div className="container mx-auto px-6 py-24 flex flex-row text-white">
        <div className="basis-1/2">
          <h1 className="text-4xl font-semibold">{t("home.hero.heading")}</h1>
          <p className="py-8">{t("home.hero.description")}</p>
          <div>
            {socials.map(({ network, url }, key) => (
              <SocialIcon
                key={key}
                network={network}
                url={url}
                bgColor="#FFFFFF"
                className="mr-2 w-8 h-8"
              />
            ))}
          </div>
          <div className="mt-12">
            <a href="/#" className="uppercase mt-8 font-semibold px-8 py-4 rounded-lg text-white bg-emerald-500 hover:bg-emerald-400 hover:cursor-pointer">
              {t("home.hero.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PoolGroup({ group }) {
  const { t, i18n } = useTranslation();
  const translationStr = `common.pools.groups.${group}`

  return (
    <>
      <h2 className="text-2xl font-semibold pb-8">{t(translationStr)}</h2>
    </>
  )
}

function Pools() {
  return(
    <section>
      <div className="container mx-auto px-6">
        <div className="py-24 grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          {groups.map((group, key) => <PoolGroup key={key} group={group} />)}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Pools />
    </>
  );
}
