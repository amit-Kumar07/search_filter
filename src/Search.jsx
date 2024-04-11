import React from 'react'
import { useState } from 'react'

export default function Search({items}){

    const [searchTerm, setSearchTerm] = useState('')
    const filterItems = items.filter((item)=>{
      
        return item.toLowerCase().includes(searchTerm.toLowerCase())
    }
    
    )
  return (
    <div>
        <input type='text' placeholder='Search..' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <ul>
           {filterItems.map((item, index)=>(
            <li key={index}>{item}</li>
           ))}
        </ul>
    </div>
  )
}
