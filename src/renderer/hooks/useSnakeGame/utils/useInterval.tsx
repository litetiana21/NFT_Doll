import { useEffect, useRef } from 'react'

function useInterval(callback: () => void, delay: number | null, gameState :boolean) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return
    }
   
    if(gameState === true){
      
      var id = setInterval(() => savedCallback.current(), delay)
    }

    return () => clearInterval(id)
  }, [delay,gameState])
}

export default useInterval
