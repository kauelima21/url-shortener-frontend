import { CircleNotch, Copy } from "phosphor-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [link, setLink] = useState('');
  const [urlShortened, setUrlShortened] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { post } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await post('create', {
      originalUrl: link,
    });

    setUrlShortened(response.data.urlShortened);
    setIsClicked(false);
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-white">
      <header className="mb-10 text-center">
        <h1 className="md:text-5xl text-3xl font-bold mb-3 text-zinc-900">URL SHORTENER</h1>
        <p className="md:text-lg text-base text-zinc-800">Basta adicionar a url no campo abaixo e depois é só clicar no botão! Fácil, não?</p>
      </header>
      <form className="flex md:w-5/12 w-8/12 flex-col items-center gap-6" onSubmit={handleSubmit}>
        <label className="flex w-full flex-col gap-1">
          <span className="font-semibold text-slate-900">Url</span>
          <input
            type="text"
            name="originalUrl"
            value={link}
            onChange={({ target }) => setLink(target.value)}
            placeholder="https://"
            className="h-12 rounded-md bg-slate-800 px-2 focus:outline-green-400"
          />
        </label>

        {urlShortened && (
          <div className="flex items-center md:w-8/12">
            <input
              type="text"
              value={urlShortened}
              className="h-12 rounded-l-md bg-slate-800 w-full px-2 focus:outline-green-400"
              disabled
            />
            <CopyToClipboard text={urlShortened} onCopy={() => setIsCopied(true)}>
              <span className="bg-green-400 flex items-center cursor-pointer text-white h-12 px-5 rounded-r-md">
                {isCopied ? 'Copiado' : (<Copy size={24} />)}
              </span>
            </CopyToClipboard>
          </div>
        )}

        <button
          type="submit"
          onClick={() => setIsClicked(!isClicked)}
          className="h-12 md:w-5/12 w-full rounded-md bg-green-400 font-bold text-zinc-50 transition-all hover:bg-green-800 flex items-center justify-center"
        >
          {isClicked ? (<CircleNotch size={24} className="animate-spin" />) : 'Encutar url'}
        </button>
      </form>
    </div>
  )
}
