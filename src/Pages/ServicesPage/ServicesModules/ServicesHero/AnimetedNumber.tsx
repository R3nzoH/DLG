import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <h3>{count.toLocaleString()}+</h3>;
};

export default AnimatedNumber;
