import React from "react";

// Countdown component
export const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};