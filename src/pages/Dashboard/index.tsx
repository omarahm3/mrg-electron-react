import { useEffect, useState } from 'react'
import { CardsContainer } from './styles'
import { Navbar, Box } from 'rendition'

export function Dashboard() {
  const [containers, setContainers] = useState([])

  const bindEvents = () => {
    // Bind list containers event
    window.Main.on('message-received', (data: any) => {
      if (data.error) {
        return console.error(data.error)
      }
      console.log(data)
    })
  }

  /**
   * Do any calls to electron main process
   * and bind your events to receive the responses
   */
  const initialize = () => {
    // Initialize docker events
    window.Main.sendMessage('Message')

    // Bind events callbacks
    bindEvents()
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <Box>
      <Navbar brand={<p>MRG</p>} />
      <CardsContainer>
        Testing
      </CardsContainer>
    </Box>
  )
}
 
