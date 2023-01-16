import { useState, useEffect } from "react";
import Comments from "./components/Comments";



const App = () => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)

  const countdown = () => {
    const endDate = new Date("December 25, 2023 00:00:00").getTime()
    const today = new Date().getTime()

    const timeDifference = endDate - today

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(timeDifference / days)
    let timeHours = Math.floor((timeDifference % days) / hours)
    let timeMinutes = Math.floor((timeDifference % hours) / minutes)
    let timeSeconds = Math.floor((timeDifference % minutes) / seconds)

    setDays(timeDays)
    setHours(timeHours)
    setMinutes(timeMinutes)
    setSeconds(timeSeconds)
  }

  useEffect(() => {
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(countdown);
  })

  return (
    <>
      <section className="container">
        <h1>Days until christmas</h1>

        <div className="countdown">
          <div className="days">
            <h3>Days</h3>
            <p>
              {days}
            </p>
          </div>

          <div className="hours">
            <h3>Hours</h3>
            <p>
              {hours}
            </p>
          </div>

          <div className="minutes">
            <h3>Minutes</h3>
            <p>
              {minutes}
            </p>
          </div>

          <div className="seconds">
            <h3>Seconds</h3>
            <p>
              {seconds}
            </p>
          </div>
          <Comments></Comments>
        </div>
      </section>
    </>

  );
}


export default App;

