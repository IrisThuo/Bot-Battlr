import React from 'react'
import BotDisplay from './BotDisplay'

function BotCollection(props) {
 
  const bots = props.bots.map((bot) => {
    return <BotDisplay key={bot.id} bot={bot} botFunction={props.botFunction}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        
        {bots}
      </div>
    </div>
  );
}


export default BotCollection;