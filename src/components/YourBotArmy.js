

import React from 'react'
import BotDisplay from './BotDisplay'

function YourBotArmy(props) {

  const displayBots = props.displaybots.map(bot => {
    return <BotDisplay bot={bot}  botFunction={props.removeFromArmy} />
  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
          {displayBots.length === 0 ? <h1>Bot Army Assemble!</h1> : null}
        </div>
      </div>
    </div>
  )

}
export default YourBotArmy