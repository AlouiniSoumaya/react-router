import React from 'react'
import {Form} from 'react-bootstrap'

export default function CustomSelect() {
  return (
    <div>
    <Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
  {Array.from({ length: 10}).map((_, idx) =>
  <option value={idx+1}>{idx+1}</option>
  )}
</Form.Select>
    </div>
  )
}

