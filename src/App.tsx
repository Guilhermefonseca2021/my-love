import { useState } from "react";
import imagem1 from "./assets/042625C9-A2FA-41E4-9ADD-E722053A2412.jpg";
import imagem2 from "./assets/A00D180B-7BED-460A-B967-81E3046CC1BC.jpg";
import { TypingText } from "./typeText/TypingText";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function showVideo() {
    if (isPlaying === false) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className=" bg-white p-8 rounded shadow-lg drop-shadow-xl gap-24 max-w-lg">
        
        <h1 className=" text-center text-slate-600 font-light">
          Te amo muito garota❤️
        </h1>
        <div >
          {isPlaying ? (
            <div className=""></div>
          ) : (
            <div className="flex my-2 gap-1">
              <img src={imagem1} alt="ff" className="w-80 h-60 " />
              <img src={imagem2} alt="ff" className="w-80 h-60 " />
            </div>
          )}
          {isPlaying ? (
          <div className="">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/-yp_sV6SUl8?si=9a-0sICAylfsAtvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <button
              onClick={showVideo}
              className=" p-2 bg-blue-500 text-white rounded"
            >
              ver cartinha...
            </button>
          </div>
        ) : (
          <button
            onClick={showVideo}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Veja agora.🤍
          </button>
        )}
        </div>
        <div className="text-slate-800 font-mono gap text-sm">
          {isPlaying ? (
            <h1>Clicou antes vai ficar sem minha cartinha sua bobona!!!</h1>
          ) : (
            <TypingText
              primary="Quero que você saiba o quanto você significa para mim. Cada momento ao
          seu lado é especial, e meu amor por você cresce a cada dia. Você é
          uma felicidade para mim, meu conforto e a pessoa que faz meu dia mais louco e alegre."
              second="Te amo muito e cada dia mais feliz por compartilhar minha vida
            com você."
              third="Com todo o meu amor, Guih S2 seu gostoso!!"
            />
          )}
        </div>
      </div>
    </div>
  );
}
