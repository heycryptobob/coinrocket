import { PoolGroup } from './PoolGroup'
import { useState, useEffect } from 'react'
// import { useTranslation } from "react-i18next";
// import { GraphQLClient, gql } from "graphql-request";
// import { latestPools } from '../../helpers/latestPools';
import { dummyPools } from '../../dummy';

const groups = [
  "active",
  "upcoming",
  "awaiting",
  "distributed",
]

// const endpoint =
//   "https://api-eu-central-1.graphcms.com/v2/ckxeqd10s5d0701xi94xu26za/master";

// const query = gql`
//   {
//     pools {
//       id
//       isPrivate
//       isDistributed
//       title
//       subtitle
//       hardCap
//       currency
//       openingTime
//       closingTime
//       contractAddress
//       description
//       poolImage(locales: [en]) {
//         url
//       }
//     }
//   }
// `;


function sortPools(pools) {
  
  const result = { active: [], upcoming: [], awaiting: [], distributed: [] }
  const currentTime = new Date()
  
  pools.forEach(pool => {
    const openingTime = new Date(pool.openingTime)
    const closingTime = new Date(pool.closingTime)
    
    if (currentTime < openingTime) {
      // UPCOMING before openingTime
      result.upcoming.push(pool)
    } else if (currentTime >= openingTime && currentTime < closingTime) {
      // ACTIVE after openingTime, before closingTime
      result.active.push(pool)
    } else if (currentTime > closingTime && !pool.isDistributed) {
      // AWAITING after closingTime, distributed FALSE
      result.awaiting.push(pool)
    } else if (pool.isDistributed) {
      // DISTRIBUTED distributed TRUE
      result.distributed.push(pool)
    } else {
      console.error(`Can't sort pool: ${pool.title}`)
    }
  });

  return result

}

export function PoolWorkflow() {

  const [pools, setPools] = useState({});

  // const headers = {
  //   "Content-Type": "application/json",
  //   "gcms-locales": i18n.language,
  // };

  useEffect(() => {
    async function getPools() {
      // const graphQLClient = new GraphQLClient(endpoint, { headers });
      // const { pools: result } = await graphQLClient.request(query);
      // const result = await latestPools(i18n)
      const result = await dummyPools()
      console.log(result)
      setPools(sortPools(result))
    }

    getPools();
  }, []);

  return(
    <section>
      <div className="mx-auto px-6">
        {/* <pre>{JSON.stringify(pools, null, 2)}</pre> */}
        <div className="py-24 grid gap-16 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          { groups ? groups.map((group, key) => <PoolGroup key={key} group={group} pools={pools[group]} />) : <></>}
        </div>
      </div>
    </section>
  )
}