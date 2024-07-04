import { useState, useEffect, useRef } from "react";
type AppProps = { checkName: string };
function BaseLogic({ checkName }: AppProps) {
  const [strElement, setStrElement] = useState(0);
  const [userText, setUserText] = useState("");
  const tryes = ["1", "2", "3", "4", "5", "6"];
  const strNumber = useRef<HTMLDivElement[]>([]);
  const childElements = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    interface KeyboardEvent {
      key: string;
    }
    if (userText.length >= 0) {
      for (let letter = 0; letter <= userText.length - 1; letter++) {
        strNumber.current[strElement].children[letter].innerHTML =
          userText[letter];
      }
    }

    function handleKeyPress(e: KeyboardEvent) {
      if (e.key.length == 1) {
        if (userText.length == 5 && userText.length <= 5) {
          setUserText(userText);
        } else {
          setUserText(userText + e.key);
        }
      } else if (e.key == "Backspace" && userText.length > 0) {
        setUserText(userText.slice(0, -1));
        strNumber.current[strElement].children[userText.length - 1].innerHTML =
          "";
      } else if (e.key == "Enter" && userText.length == 5) {
        if (userText == checkName) {
          alert("you win");
          for (let i = 0; i <= checkName.length - 1; i++) {
            childElements.current[strElement * 5 + i].style.backgroundColor =
              "green";
          }
        } else {
          for (let i = 0; i <= checkName.length - 1; i++) {
            if (checkName[i] == userText[i]) {
              childElements.current[strElement * 5 + i].style.backgroundColor =
                "green";
              console.log();
            } else if (checkName.includes(userText[i])) {
              childElements.current[strElement * 5 + i].style.backgroundColor =
                "yellow";
            } else {
              childElements.current[strElement * 5 + i].style.backgroundColor =
                "red";
            }
            setStrElement(strElement + 1);
            setUserText("");
          }
        }
      }
    }
    if (strElement <= 6) {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [userText, strElement]);
  const addToStrNumbers = (el: HTMLDivElement) => {
    if (el && !strNumber.current.includes(el)) {
      strNumber.current.push(el);
    }
  };
  const addToChildElements = (el: HTMLDivElement) => {
    if (el) {
      childElements.current.push(el);
    }
  };
  return (
    <div className="game bg-slate-800 w-screen h-screen text-white flex items-center justify-center">
      <div className="w-[400px] h-[410px]">
        {tryes.map((num) => (
          <div
            key={num}
            id={num}
            ref={addToStrNumbers}
            className="w-[400px] h-[70px] flex justify-between text-black text-center"
          >
            <div
              className="txt w-[60px] h-[60px] bg-slate-300 rounded flex items-center justify-center"
              ref={addToChildElements}
            ></div>
            <div
              className="txt w-[60px] h-[60px] bg-slate-300 rounded flex items-center justify-center"
              ref={addToChildElements}
            ></div>
            <div
              className="txt w-[60px] h-[60px] bg-slate-300 rounded flex items-center justify-center"
              ref={addToChildElements}
            ></div>
            <div
              className="txt w-[60px] h-[60px] bg-slate-300 rounded flex items-center justify-center"
              ref={addToChildElements}
            ></div>
            <div
              className="txt w-[60px] h-[60px] bg-slate-300 rounded flex items-center justify-center"
              ref={addToChildElements}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BaseLogic;
