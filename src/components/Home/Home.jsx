import React from 'react'
import { Row } from 'react-bootstrap'
import CustomCard from '../UI/Card'

export default function Home({Data}) {
  return (
    <div>
      
    <Row xs={2} md={3} className="g-4">
    {Data?.map((ele,key)=> 
        <CustomCard ele={ele}/>
    )}
    </Row>
    </div>
  )
}
