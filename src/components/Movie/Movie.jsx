import React from 'react'
import CustomCard from '../UI/Card'
import { useParams } from 'react-router-dom'

export default function Movie({Data}) { 
    const {id}=useParams()
    const found = Data.filter(el=> el.id==id)
  console.log(found)
    return (
    <div>
        <div>
        {found[0].title}
        </div>
        <div>
        {found[0].trailer}
        </div>
    </div>
  )
}
