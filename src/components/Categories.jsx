function Categories() {

  return (
    <div className="Categories text-left my-5">
      <h3 className="text-2xl mb-3">Categories</h3>
      <div className="flex flex-nowrap overflow-x-auto">
        <article className="rounded-2xl bg-green-100 p-4 w-64 min-w-max mr-3">
          <p className="m-0 text-5xl rounded-full">☪️</p>
          <h6 className="m-0 text-xl font-light mt-10 mr-12">Islamic Names</h6>
          <p className="m-0 text-sm font-medium">Male • General</p>
        </article>
        <article className="rounded-2xl bg-purple-100 p-4 w-64 min-w-max mr-3">
          <p className="m-0 text-5xl rounded-full">🧫</p>
          <h6 className="m-0 text-xl font-light mt-10 mr-10">Yoruba Names</h6>
          <p className="m-0 text-sm font-medium">Male • General</p>
        </article>
        <article className="rounded-2xl bg-yellow-100 p-4 w-64 min-w-max mr-3">
          <p className="m-0 text-5xl rounded-full">🧿</p>
          <h6 className="m-0 text-xl font-light mt-10">Hausa Names</h6>
          <p className="m-0 text-sm font-medium">Male • General</p>
        </article>
        <article className="rounded-2xl bg-purple-100 p-4 w-64 min-w-max mr-3">
          <p className="m-0 text-5xl rounded-full">🧫</p>
          <h6 className="m-0 text-xl font-light mt-10">Yoruba Names</h6>
          <p className="m-0 text-sm font-medium">Male • General</p>
        </article>
      </div>
    </div>
  )
}

export default Categories