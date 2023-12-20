import { useEffect } from "react";
/* import Logo from "../../assets/whitelogo-bmouse-5ef2c2f7.svg"; */

const Loading = () => {
  useEffect(() => {
    const body = document.body;
    const loading = document.querySelector("div.loading");

    const handleLoad = () => {
      setTimeout(() => {
        body.classList.remove("carregando");
        if (loading) {
          loading.classList.add("ocultar");
        }
      }, 1000); // Quantidade de milissegundos que ele ficará depois do conteúdo carregar (1000 = 1 segundo)
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 222.77 68"
          className="w-[200px]"
        >
          <defs>
            <style>{`.cls-1{fill:#fff;}.cls-2{fill:#4bc0ee;}`}</style>
          </defs>
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <path
                className="cls-1 um"
                d="M0,23.73V2.87c0-1.59.45-2.05,2-2,6.66,0,13.32,0,20,.06a15.66,15.66,0,0,1,8.36,2.3c3.91,2.49,5.48,6.18,5.33,10.73-.1,3.17-1.79,5.42-4,7.39l-.43.34c-.68.58-.67.92.12,1.37a10.58,10.58,0,0,1,5.23,6.09c1.39,4.49.73,12.36-5.78,15.65a18.15,18.15,0,0,1-8.07,1.86c-7,.08-14.09,0-21.13,0A1.46,1.46,0,0,1,0,45.12c0-.69,0-1.39,0-2.09ZM17.48,35.16h0c1.15,0,2.3,0,3.44,0a3.2,3.2,0,0,0,3-4,3.58,3.58,0,0,0-3.52-2.63H14.15a1.54,1.54,0,0,0-1.73,1.69q0,1.62,0,3.24a1.53,1.53,0,0,0,1.69,1.66C15.23,35.17,16.36,35.16,17.48,35.16ZM17,12.34c-1,0-2,0-3,0a1.46,1.46,0,0,0-1.55,1.51c0,1,0,1.93,0,2.89a1.45,1.45,0,0,0,1.46,1.47c2,0,4,.05,6,0a2.94,2.94,0,0,0-.17-5.86Z"
              />
              <path
                className="cls-1 dois"
                d="M87.33,23.69c0-4.39,0-8.77,0-13.16a1.82,1.82,0,0,1,.42-1.23c5.75-7.09,13.18-10.36,22.2-9,9.29,1.41,15.74,6.83,18.92,15.64a23.58,23.58,0,0,1-18.35,31.17c-9.26,1.56-16.88-1.67-22.79-9A1.68,1.68,0,0,1,87.33,37C87.34,32.56,87.33,28.12,87.33,23.69Zm19.29,11.89a8.27,8.27,0,0,0,2-.21,11.92,11.92,0,0,0,8-17,11.21,11.21,0,0,0-13.16-6,11.91,11.91,0,0,0-7.87,14A11.62,11.62,0,0,0,106.62,35.58Z"
              />
              <path
                className="cls-1 dois"
                d="M165.7,31.64a34,34,0,0,0,6.18,3,15.94,15.94,0,0,0,8.09.84,4.94,4.94,0,0,0,2.12-.83,2.13,2.13,0,0,0-.38-3.85,19.84,19.84,0,0,0-4.39-1c-3.5-.67-7.06-1.13-10.39-2.53a1.37,1.37,0,0,1-1-1.51c0-7.6,0-15.21,0-22.82a1,1,0,0,1,.8-1.14A27.92,27.92,0,0,1,178,.24,26.87,26.87,0,0,1,192.89,5.8c1.33,1,1.45,1.65.51,3L189,15.08a1.6,1.6,0,0,1-2.52.52,22.16,22.16,0,0,0-9.07-3.45,17.18,17.18,0,0,0-4.64.06,3.56,3.56,0,0,0-1.49.59,1.65,1.65,0,0,0,0,2.86,12.38,12.38,0,0,0,3.2,1.41c2.21.74,4.52,1,6.78,1.49a23.52,23.52,0,0,1,8.48,3.32,12.67,12.67,0,0,1,5.83,10.53c.09,3.55-.58,6.85-2.9,9.66a13.64,13.64,0,0,1-8,4.61A31,31,0,0,1,161.29,43c-.49-.3-.58-.46-.15-1a20,20,0,0,0,4.39-9.64c0-.13.05-.26.08-.4S165.65,31.82,165.7,31.64Z"
              />
              <path
                className="cls-1 um"
                d="M190,46.55a20,20,0,0,0,2.75-2,14.58,14.58,0,0,0,4.52-9.95A15.81,15.81,0,0,0,196.17,27a15.52,15.52,0,0,0-7.79-7.89.81.81,0,0,1-.54-.87c0-.38.12-.56.51-.63a2.9,2.9,0,0,0,1.9-1.3c1.63-2.32,3.27-4.63,4.88-7a3.32,3.32,0,0,0-.73-4.57,33.48,33.48,0,0,0-5.35-3.38c-.16-.08-.36-.1-.45-.32a1.19,1.19,0,0,1,.93-.23q15.75,0,31.52,0c1.18,0,1.71.56,1.71,1.77v8A1.55,1.55,0,0,1,221,12.34h-18.7c-1.58,0-2,.47-2,2.07V16c0,1.43.52,2,1.95,2,5.33,0,10.66,0,16,0h.6a1.4,1.4,0,0,1,1.42,1.41c0,2.93,0,5.85,0,8.78,0,.92-.64,1.44-1.67,1.44H201.87a1.51,1.51,0,0,0-1.61,1.6c0,.68,0,1.35,0,2A1.56,1.56,0,0,0,202.05,35h19.11a1.49,1.49,0,0,1,1.6,1.6c0,2.81,0,5.63,0,8.44a1.47,1.47,0,0,1-1.61,1.59H190.29C190.19,46.66,190.07,46.7,190,46.55Z"
              />
              <path
                className="cls-1 dois"
                d="M164.19,15.93c0,4,0,8.05,0,12.08a19.55,19.55,0,0,1-3.91,12.3A17.85,17.85,0,0,1,149,47a23.18,23.18,0,0,1-14.32-1.52,17.37,17.37,0,0,1-7.24-6.1.93.93,0,0,1,0-1.24,25.24,25.24,0,0,0-1.21-30.39,14.6,14.6,0,0,0-1.49-1.65,1.64,1.64,0,0,1-.56-1.43c0-.69,0-1.39,0-2.09A1.52,1.52,0,0,1,125.9.88q4.42,0,8.85,0c1.36,0,1.88.51,1.88,1.86v25a8.92,8.92,0,0,0,1.1,4.66,7.57,7.57,0,0,0,8,3.44,7.14,7.14,0,0,0,5.93-6,13.56,13.56,0,0,0,.15-2.29V2.86a2.16,2.16,0,0,1,.3-1.36,1.55,1.55,0,0,1,1.34-.63h9.12a1.48,1.48,0,0,1,1.65,1.68Z"
              />
              <path
                className="cls-2 um"
                d="M38.54,36.54a22.6,22.6,0,0,0,3.24,4.84.61.61,0,0,1,0,.94,19.86,19.86,0,0,0-2.72,3.85.86.86,0,0,1-.91.5c-.74,0-1.48,0-2.22,0a1.28,1.28,0,0,1-1.25-.87,1.72,1.72,0,0,1,.1-1.79,13.66,13.66,0,0,0,3.63-7.08A2.87,2.87,0,0,1,38.54,36.54Z"
              />
              <path
                className="cls-2 dois"
                d="M38.21,28.33a12.81,12.81,0,0,0-3.39-5,.55.55,0,0,1-.17-.48,6.06,6.06,0,0,0,0-.74,2.85,2.85,0,0,1,.67-2.16c2.51-3.26,2.55-6.93,1.62-10.73a10.72,10.72,0,0,0-1.89-4A1.78,1.78,0,0,1,34.64,4c0-.54,0-1.08,0-1.62A1.44,1.44,0,0,1,36.16.88c2.91,0,5.81,0,8.71,0a3,3,0,0,1,2.45,1.45q5.74,8.46,11.52,16.89l.27.39c.66.93,1.29.92,1.94,0C64.91,14,68.78,8.31,72.61,2.65A3.7,3.7,0,0,1,76,.86c2.61.05,5.22,0,7.83,0a1.54,1.54,0,0,1,1.75,1.73V44.94c0,1.17-.57,1.72-1.76,1.72a7.49,7.49,0,0,1-2.6-.08c-.76-.29-1-1.34-1.44-2a21.28,21.28,0,0,0-3.15-3.68c-.4-.37-.47-.64.13-.85,2.34-.82,4.17-4.34,3.63-6.68-.74-3.16-3.21-5.51-6.22-5.51a6.42,6.42,0,0,0-6.09,8.73l.32.76a.65.65,0,0,1-.49-.55,2.71,2.71,0,0,0-2.28-1.86,24.36,24.36,0,0,0-21.06,4.89c-1,.79-1,.8-1.79-.22a15.48,15.48,0,0,1-3.15-6.12,8.48,8.48,0,0,1-.05-3.29,5.31,5.31,0,0,1,9.77-1.49,4.47,4.47,0,0,1,0,4.34,3.81,3.81,0,0,1-4.75,1.5,2.86,2.86,0,0,1-1.37-3.34,2,2,0,0,1,2.16-1.44.79.79,0,0,1,.75.66.78.78,0,0,1-.35.87,3.53,3.53,0,0,0-.65.48A.75.75,0,0,0,45.82,33a2.34,2.34,0,0,0,2.25-2.7,3.06,3.06,0,0,0-2.86-2.49,4.13,4.13,0,0,0-3.92,5.13,4.9,4.9,0,0,0,3.91,3.76,2.85,2.85,0,0,0,1.54-.08c1.57-.57,3.25-1,4.25-2.53a4.59,4.59,0,0,0,.63-2.44c.15-4.16-2-7-6.21-7.46a7,7,0,0,0-6.75,3.41C38.52,27.79,38.4,28,38.21,28.33Z"
              />
              <path
                className="cls-2 um"
                d="M76.69,43.84c.34,0,.64.18.64.55a.57.57,0,0,1-.6.59.55.55,0,0,1-.61-.62C76.14,44,76.37,43.87,76.69,43.84Z"
              />
              <path
                className="cls-2 dois"
                d="M56.35,67.85v-8.6h4a2.77,2.77,0,1,1,0,5.53H58.18v3.07Zm5-5.83a1.15,1.15,0,0,0-1.27-1.15H58.18v2.3h1.93A1.16,1.16,0,0,0,61.38,62Z"
              />
              <path
                className="cls-2 um"
                d="M71.08,67.85l-1.69-3.06H68.05v3.06H66.22v-8.6h4A2.69,2.69,0,0,1,73.14,62a2.48,2.48,0,0,1-1.9,2.55l2,3.28ZM71.26,62A1.16,1.16,0,0,0,70,60.87H68.05v2.31H70A1.16,1.16,0,0,0,71.26,62Z"
              />
              <path
                className="cls-2 dois"
                d="M75.91,63.56A4.49,4.49,0,1,1,80.41,68,4.32,4.32,0,0,1,75.91,63.56Zm7.1,0a2.62,2.62,0,1,0-2.6,2.82A2.6,2.6,0,0,0,83,63.56Z"
              />
              <path
                className="cls-2 um"
                d="M88,67.85v-8.6h3.39a4.31,4.31,0,1,1,0,8.6Zm6.08-4.31a2.51,2.51,0,0,0-2.68-2.67H89.83v5.37h1.56A2.58,2.58,0,0,0,94.08,63.54Z"
              />
              <path
                className="cls-2 dois"
                d="M99.07,64.41V59.25h1.85v5.11a2,2,0,1,0,4,0V59.25h1.87v5.16c0,2.12-1.26,3.59-3.87,3.59S99.07,66.53,99.07,64.41Z"
              />
              <path
                className="cls-2 um"
                d="M109.93,63.56a4.37,4.37,0,0,1,4.59-4.45,3.91,3.91,0,0,1,3.58,2.1l-1.57.78a2.32,2.32,0,0,0-2-1.25,2.82,2.82,0,0,0,0,5.64,2.34,2.34,0,0,0,2-1.25l1.57.76A3.94,3.94,0,0,1,114.52,68,4.37,4.37,0,0,1,109.93,63.56Z"
              />
              <path
                className="cls-2 dois"
                d="M123,67.85v-7h-2.51V59.25h6.85v1.62h-2.5v7Z"
              />
              <path className="cls-2 um" d="M130.33,67.85v-8.6h1.83v8.6Z" />
              <path
                className="cls-2 dois"
                d="M135.27,63.56a4.49,4.49,0,1,1,4.5,4.44A4.32,4.32,0,0,1,135.27,63.56Zm7.1,0a2.62,2.62,0,1,0-2.6,2.82A2.6,2.6,0,0,0,142.37,63.56Z"
              />
              <path
                className="cls-2 um"
                d="M153.28,67.85l-4.09-5.61v5.61h-1.83v-8.6h1.88l4,5.4v-5.4h1.83v8.6Z"
              />
              <path
                className="cls-2 dois"
                d="M158,66.64l1-1.44a3.76,3.76,0,0,0,2.73,1.18c1,0,1.5-.45,1.5-1,0-1.49-5-.45-5-3.68,0-1.43,1.24-2.61,3.26-2.61a4.79,4.79,0,0,1,3.35,1.19l-1,1.37a3.7,3.7,0,0,0-2.5-.94c-.77,0-1.21.33-1.21.85,0,1.35,4.94.44,4.94,3.64,0,1.58-1.14,2.76-3.44,2.76A5,5,0,0,1,158,66.64Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;