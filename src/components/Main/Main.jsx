import React from 'react'
import CustomCard from '../UI/Card'
import { Row } from 'react-bootstrap'



export default function Main({Data}) {
  return (
    <div>
      
      <Row xs={2} md={3} className="g-4">
    {Data?.map((ele,key)=> 
    {if (ele.rating>7) return <CustomCard ele={ele}/>}
        
    )}
    </Row>
    </div>
  )
}
