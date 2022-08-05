function Bookmarks() {

  return (
    <div className="Bookmarks text-left my-5 mb-16">
      <h3 className="text-3xl mb-3">Bookmarks</h3>
      <ul className="px-5">
        <li className="flex justify-between items-center py-1">
          <div className="">
            <h5 className="m-0 text-xl uppercase text-blue-500">Olasunkanmi</h5>
            <span className="font-light text-base text-gray-400">Yoruba • Wealth • Middle-Name</span>
          </div>
          <div>
            <p className="m-0 text-xl">🔖</p>
            <span>100</span>
          </div>
        </li>
        <hr/>
        <li className="flex justify-between items-center py-1">
          <div className="">
            <h5 className="m-0 text-xl uppercase text-red-500">Asake</h5>
            <span className="font-light text-base text-gray-400">Yoruba • Wealth • Middle-Name • Feminine</span>
          </div>
          <div>
            <p className="m-0 text-xl">🔖</p>
            <span>42</span>
          </div>
        </li>
        <hr/>
        <li className="flex justify-between items-center py-1">
          <div className="">
            <h5 className="m-0 text-xl uppercase text-green-500">Yasir</h5>
            <span className="font-light text-base text-gray-400">Islamic • Wealth • First-Name • Masculine</span>
          </div>
          <div>
            <p className="m-0 text-xl">🔖</p>
            <span>42</span>
          </div>
        </li>
        <hr/>
        <li className="flex justify-between items-center py-1">
        </li>
      </ul>
    </div>
  )
}

export default Bookmarks