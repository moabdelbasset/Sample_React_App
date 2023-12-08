import React from 'react'

function ConditionalRendingFunctional() {
  return (
    <div>
        <h1>{PaymentResponse.connected ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}

export default ConditionalRendingFunctional