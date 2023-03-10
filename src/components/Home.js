import React, {useState, useEffect} from "react"
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"


function Home(){
      
  const [bots, setBots] = useState([])
  const [yourBots, setYourBots] = useState([])

  useEffect(() => {
   
    fetch("https://api.npoint.io/34e96a5f4423d0be7fc1/bots/")
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }, []);

  function addToArmy(bot)  {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot])
    }
  }

  function removeFromArmy(bot) {
    setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy bots={yourBots} removeBot={removeFromArmy} />
      <BotCollection bots={bots} botFunction={addToArmy} />
    </div>
  )
}

export default Home