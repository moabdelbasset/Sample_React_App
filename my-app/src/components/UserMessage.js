import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : 
        (<p>Please sign in</p>)
        }
    </div>
  )
}

export default UserMessage