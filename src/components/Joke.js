import React from "react";

export default function Joke({ setup, punchline, num }) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((preValue) => !preValue);
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
        <h1> ❤️كل عام وأنتي بخير حبيبتي أبرار</h1>
        {isShown && (
          <div>
            <p>
              وكان ET بالعربى قد تواصل بعد الحادث مع دانا حمدان، شقيقة مى سليم،
              لكشف ملابسات الواقعة، والاطمئنان على الحالة الصحية لميّ، وقالت في
              وقتها: "مى دلوقتي الحمد لله فى منزلها، وهي بخير، وكانت حادثة قوية
              تعرضت لها أثناء توجهها للوكشين التصوير، حيث اصطدمت سيارتين
              بسيارتها، وهى بخير، لكن الصدمة كانت قوية، والحمد لله قدّر ولطف"،
              مطالبة الجمهور بالدعاء لها.❤️
            </p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images"
              target="_blank"
              id="heart"
              class="button"
            ></a>{" "}
          </div>
        )}
        <button onClick={toggleShown}>
          {isShown ? "أخفي" : "أضغط ❤️"}
        </button>
      </div>
    </div>
  );
}
