import React from 'react'

const TestCall=({Learning,Count})=> {
    console.log('child re rendered')
  return (
    <div>
      
    </div>
  )
}

export default React.memo(TestCall)
