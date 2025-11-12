import useFetch from '../../hooks/useFetch'

export default function Services() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  )

  return (
    <main className="px-6 md:px-16 py-20">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      {loading && <p>Loading services...</p>}
      {error && <p>Error loading</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-[var(--card)] rounded-2xl p-6 shadow-md hover:scale-[1.01] transition"
          >
            <h3 className="text-[var(--primary)] font-semibold">
              {item.title.substring(0, 40)}
            </h3>
            <p className="text-sub mt-2">{item.body.substring(0, 120)}...</p>
            <button className="mt-4 inline-block px-4 py-2 rounded-md border border-[var(--sub)] hover:border-[var(--accent)]  hover:text-[var(--accent)] transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
