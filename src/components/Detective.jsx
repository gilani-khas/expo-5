import { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("Психопат");

  const handleClick = () => {
    setSherlock("Высокоактивны социопат");
  };

  return (
    <>
      <div>Шуерлок - {sherlock}</div>
      <button onClick={handleClick}>Узнать правду</button>
    </>
  );
}
export default Detective;
