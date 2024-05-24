import HomeIcon from "../../assets/icons/HomeIcon";
import PostIcon from "../../assets/icons/PostIcon";

export default function Dashboard() {

  let activeTab: string = 'bg-zinc-100 text-gray-900  font-semibold'

  return (
    <main>
      <section className="w-72 bg-gray-800 h-screen fixed pt-5">
        <div className="text-zinc-300 mb-10 ps-5">
          <a href="void:0" className="text-xl font-family:system-ui">Logo</a>
        </div>

        <ul className="text-zinc-50 px-3 gap-y-1 flex flex-col">
          <li className={`w-full px-3 py-3 rounded-lg transition-all cursor-pointer flex ${activeTab}`} >
            <HomeIcon classProps={"me-3"} />
            Home
          </li>
          <li className="w-full px-3 py-3 hover:bg-zinc-200 hover:text-gray-900 rounded-lg transition-all cursor-pointer flex">
            <PostIcon classProps={"me-3"} />
            New Post
          </li>
        </ul>


      </section>

      <section className="ms-80">
        <h2>Welcome User!</h2>
      </section>
    </main>
  )
}
