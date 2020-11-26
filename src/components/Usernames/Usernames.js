import React from 'react';
import './Usernames.css'
import { splitToChunks } from '../../Helpers'

const Usernames = ({ items, isLoading, rows }) => {
  console.log(rows)
  return isLoading ? (<h3>loading...</h3>) : (<section className="UserList">
    <ul>
      {splitToChunks(items, rows).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>)

}

export default Usernames