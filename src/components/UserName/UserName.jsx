import { useState } from "react"

const UserName = () => {
    const [ profileName, setProfileName ] = useState()
  return (
    <>
    <div>
        <h1 className="homepage-title1">Namaste,</h1>
        </div>
    <div className="homepage-title2">
      profileName[username]
    </div>
    </>
  )
}

export default UserName


