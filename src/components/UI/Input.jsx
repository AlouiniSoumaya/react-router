import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

export default function Input() {
  return (
    <div>
    <InputGroup className="mb-3">
   
    <FormControl
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
    </InputGroup>
    </div>
  )
}
