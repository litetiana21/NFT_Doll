import "./index.scss";
// import CountdownTimer from './CountdownTimer';
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import { useMemo, useState } from "react";

type Iprops = {
    onChange: (a: any) => void;
}


const ShowCounter = (props: any) => {
  const { days, hours, minutes, seconds } = props;
  return (
    <div style={{ display: "flex" }}>
      <DateTimeDisplay
        className="gap"
        value={days}
        type={"Days"}
        isDanger={days <= 4}
      />

      <DateTimeDisplay
        className="gap"
        value={hours}
        type={"Hours"}
        isDanger={false}
      />

      <DateTimeDisplay
        className="gap"
        value={minutes}
        type={"Minutes"}
        isDanger={false}
      />

      <DateTimeDisplay
        className="gap"
        value={seconds}
        type={"Seconds"}
        isDanger={false}
      />
    </div>
  );
};

const CountdownTimer = (props: Iprops) => {
  const THREE_DAYS_IN_MS = new Date("April 15, 2022 12:00:00").getTime();
  const dateTimeAfterThreeDays = THREE_DAYS_IN_MS;
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);
  useMemo(() => {
    props.onChange(days + hours + minutes + seconds);
  }, [days, hours, minutes, seconds])


    return (
      <>
        <h1>Coming Soon</h1>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </>
    );
};

export default CountdownTimer;
