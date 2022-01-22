
import { useState } from "react";

export default function useVisualMode (initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

  const transition = (newMode) => {

    setMode(newMode)
    setHistory([...history, newMode])

  }

  const back = () => {
   
   const greaterThanOne = () => {
    const prev = [...history]
    prev.pop();

    const last = prev.length-1
    setMode(prev[last])
   setHistory([...prev])
  }

  history.length === 1 ? setMode(history[0]) : greaterThanOne();
}

  return {mode, transition, back}
}
