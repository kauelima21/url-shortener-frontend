
export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-white">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-3 text-zinc-900">URL SHORTENER</h1>
        <p className="text-zinc-800">Basta adicionar a url no campo abaixo e depois é só clicar no botão! Fácil, não?</p>
      </header>
      <form className="flex md:w-5/12 w-8/12 flex-col items-center gap-6">
        <label className="flex w-full flex-col gap-1">
          <span className="font-semibold text-slate-900">Url</span>
          <input type="text" placeholder="https://" className="h-12 rounded-md bg-slate-800 px-2 focus:outline-green-400" />
        </label>
        <button type="submit" className="h-12 md:w-5/12 w-full rounded-md bg-green-400 font-bold text-zinc-50 transition-all hover:bg-green-800">Encurtar url</button>
      </form>
    </div>
  )
}
