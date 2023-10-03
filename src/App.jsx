import { useEffect, useState } from "react"
import Login from "./pages/Login/Login"
import Feed from "./pages/Feeds/Feed"

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const logedinUser = {
      name: "Omer",
      id: 1,
    }
    setUser(logedinUser)
  }, [])
  return <div>{!user ? <Login /> : <Feed />}</div>
}

export default App
