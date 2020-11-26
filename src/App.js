import React, {useState, useEffect}  from 'react'
import './App.css'
import Header from "./components/UI/Header"
import Usernames from './components/Usernames/Usernames'
import Controls from './components/Controls/Controls'
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [names, setNames] = useState(5)
  const [rows, setRows] = useState(3)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.request({
        url: 'https://randomuser.me/api',
        method: 'get',
        params: {
          inc: 'name,login',
          results: names
        }
      })
      setItems(result.data.results.map(item => {
        return <span>{item.name.title} {item.name.first} {item.name.last}</span>
      }))
    }
    fetchItems().then(r => setIsLoading(false))
  }, [names, rows])

  return (
    <div className="Container">
      <Header />
      <Controls getNames={(n) => setNames(n)} getRows={(r) => setRows(r)} />
      <Usernames isLoading={isLoading} items={items} rows={rows} />
    </div>
  )
}

export default App
