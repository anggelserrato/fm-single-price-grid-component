function SinglePriceGrid() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <article className="grid max-w-[312px] grid-cols-1 overflow-hidden rounded-lg shadow-2xl md:max-w-[610px] md:grid-cols-2">
        <header className="bg-white p-500 md:col-span-2">
          <h1 className="mb-300 text-preset-2 text-teal-500">
            Join our community
          </h1>
          <p className="mb-100 text-preset-3 text-green-400">
            30-day, hassle-free money back guarantee
          </p>
          <p className="text-preset-4-regular text-gray-500">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </header>

        <section className="flex min-h-[225px] flex-col bg-teal-500 px-500 py-300 text-white md:col-start-1 md:row-start-2 md:rounded-bl-lg md:p-500">
          <div>
            <h2 className="mb-200 text-preset-3">Monthly Subscription</h2>
            <div className="flex items-center gap-100">
              <span className="text-preset-1">$29</span>
              <span className="text-preset-4-regular opacity-[0.5]">
                per month
              </span>
            </div>
            <p className="text-preset-4-regular">
              Full access for less than $1 a day
            </p>
          </div>
          <button
            type="button"
            className="mt-auto w-full cursor-pointer rounded-[5px] bg-green-400 py-[12.5px] text-preset-4-bold shadow-[0_10px_10px_0_rgba(0,0,0,0.10)]"
          >
            Sign Up
          </button>
        </section>

        <section className="min-h-[225px] bg-teal-400 px-500 py-300 text-white md:col-start-2 md:row-start-2 md:min-h-[259px] md:p-500">
          <h2 className="mb-200 text-preset-3">Why Us</h2>
          <ul className="text-preset-5 opacity-[0.75]">
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default SinglePriceGrid;
