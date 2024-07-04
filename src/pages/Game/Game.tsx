import { useState, useEffect } from "react";
import "./Game.css";
import axios from "axios";
import BaseLogic from "../../components/BaseLogic";
function Game() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const url = "https://random-word-api.herokuapp.com/word?length=5";
  useEffect(() => {
    const fetchWord = async () => {
      setIsloading(true);
      try {
        await axios.get(url).then((resp) => {
          const wrd = resp.data;
          console.log(wrd);
          setWord(wrd);
        });
      } catch (e) {
        setError((e as Error).message);
        console.log(error);
      }
    };
    fetchWord();
    setIsloading(false);
  }, [error]);
  if (isLoading == true) {
    return <div className="game bg-slate-800 w-screen h-screen"></div>;
  }
  return (
    <div className="game bg-slate-800 w-screen h-screen text-white flex items-center justify-center">
      <BaseLogic checkName={word[0]} />
    </div>
  );
}

export default Game;
