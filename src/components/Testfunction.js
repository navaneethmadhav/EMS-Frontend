//rfce

import React from 'react'
import { useState } from 'react'

function Testfunction() {

    //state creation
    const [username,setUsername]=useState('Navaneeth')   //'' - text
    const [age,setage]=useState(20)

  return (
    <div>Username is {username}
    <br/>
    Age is {age}

    </div>
  )
}

export default Testfunction