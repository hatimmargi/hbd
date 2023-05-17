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
              حبيبتي وملكتي ومليكة قلبي بتوو، اظن اني احلم وانتي حبيبتي وانيستي
              ورفيقة دربي رفيقة عمري القادم، ليس هذا بحلم وما احلاه من حلم لا
              أريد الاستيقاظ منه أبدا. وحتى ولو كنت أحلم فصدقيني لن يكون خالياً
              منك يا أجمل احلامي و آخر امنياتي واولها. الآن وانتي معي وبجانبي لا
              أتخيل نفسي بعيدا عنك وكلي رغبة في تواجدك الدائم والتام ادامك الله
              لي ياحبيبتي وجمعنا سوياً دائما، ها ذا ينتهي عام ويبدأ عام لا ارى
              فيه سواك، انتهت احلام ديسمبر وستبدأ بشريات يناير لكن بُشرياتي لا
              تعرف شهراً ولا دهراً، يا بشارة قلبي وهناها. في بداية العام الجديد
              أرسل لك تهانيي بالعام الجديد وتهان خاصة لعامنا نحن الجديد، أتطلع
              لهذا العام وانتي في حياتي وانتي حياتي. عام سعيد يا قمرري وعمرري
              وسعدي وهنائي وبهجتي وسروري ❤️ كل عام ونحن بخير كل عام ونحن معا كل
              عام وسأظل المحب لك دوماً. أحبك بعدد السنين الماضية والاعوام
              القادمة، أحبك هذا العام، والعام القادم وكل الاعوام يا حُبي. ♥️
            </p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images"
              target="_blank"
              id="heart"
              class="button"
            ></a>{" "}
          </div>
        )}
        <button onClick={toggleShown}>{isShown ? "أخفي" : "أضغط ❤️"}</button>
      </div>
    </div>
  );
}
