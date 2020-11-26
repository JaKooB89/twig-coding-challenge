import React, { useState } from 'react';
import './Controls.css'

const Controls = ({ getNames, getRows }) => {
  const [numberOfNames, setNumberOfNames] = useState(5)
  const [numberOfRows, setNumberOfRows] = useState(3)

  const updateNames = (n) => {
    setNumberOfNames(n)
    getNames(n)
  }

  const updateRows = (r) => {
    setNumberOfRows(r)
    getRows(r)
  }

  return (
    <section className='Controls'>
      <form>
        <label htmlFor="numberOfNames">Number of random names </label>
        <input
          type="number"
          name="Number of Names"
          id="numberOfNames"
          min="1"
          max="99"
          value={numberOfNames}
          onChange={(e) => updateNames(e.target.value)}
        />
        <label htmlFor="numberOfNames">Number of rows </label>
        <input
          type="number"
          name="Number of Rows"
          id="numberOfRows"
          min="1"
          max="99"
          value={numberOfRows}
          onChange={(e) => updateRows(e.target.value)}
        />
      </form>
    </section>
  )

}

export default Controls