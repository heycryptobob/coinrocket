import { useState, useEffect } from 'react'
import { Col } from "react-bootstrap";
import { Promotion } from '../components/Promotion'
import { request, gql } from 'graphql-request';


const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckpwautxo7cgi01wk07vshu8h/master'
const query = gql`
  query Promotions {
    promotions {
      id,
      title,
      subtitle,
      target,
      image {
        url
      }
    }
  }
`

export function PromotionList() {

  const [promotions, setPromotions] = useState([])

  async function fetchPromotions() {
    const { promotions } = await request(
      endpoint,
      query
    )
    setPromotions(promotions)
  }

  useEffect(() => {
    fetchPromotions()
  }, [])

  return (
    <>
      { promotions.length > 0 ? promotions.map((promotion, id) => <Col xs={6} md={3} key={id} className="mt-3"><Promotion promotion={promotion} /></Col> ) : <></>} 
    </>
  )
}