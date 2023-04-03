import React from "react";

export default function Joke({ setup, punchline, num }) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown () {
    setIsShown (preValue => !preValue)
  }
  return (
    // <div className="joke">
    //     <span>{num}</span>
    //   {setup && <p>{setup}</p>}
    //   { isShown && <h1>{punchline}</h1>}
    //   <button onClick={toggleShown}>{isShown ? 'Hide' : 'Show'}  Joke</button>
    // </div>
    <div className="container">
<div className="hbd">
<h1>Happy Birthday Suha!</h1>
      {isShown && <p>Let the rain come down and wash away your tears ❤️ <br/> 
Let it fill your soul and drown your fears ❤️ <br/> 
Let it shatter the walls for a new sun ❤️</p>}
      <button onClick={toggleShown}>{isShown ? 'Hide' : 'Click Here ❤️'}</button>

</div>
    </div>
  );
}
