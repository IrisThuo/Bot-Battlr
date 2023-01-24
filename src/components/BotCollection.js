import React from 'react'
import BotDisplay from './BotDisplay'

function BotCollection(props) {
 
  const displayBots = props.displayBots.map((bot) => {
    return <BotDisplay key={bot.id} bot={bot} botFunction={props.botFunction}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        
        {displayBots}
      </div>
    </div>
  );
}

export default BotCollection;