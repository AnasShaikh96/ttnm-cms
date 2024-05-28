import { NavLink } from 'react-router-dom'
import HomeIcon from '../../assets/icons/HomeIcon'
import Pencilicon from '../../assets/icons/Pencilicon'
import PostIcon from '../../assets/icons/PostIcon'

export default function Sidebar() {

  let activeTab: string = 'bg-zinc-100 text-gray-900  font-semibold rounded-lg'

  return (
    <section className="w-72 bg-gray-800 h-screen fixed pt-5">
      <div className="text-zinc-300 mb-10 ps-5">
        <a href="void:0" className="text-xl font-family:system-ui">Logo</a>
      </div>

      <div className="text-zinc-50 px-3 gap-y-1 flex flex-col">
        <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? activeTab : ''}>
          <span className={`w-full px-3 py-3 rounded-lg transition-all cursor-pointer flex`} >
            <HomeIcon classProps={"me-3"} />
            Home
          </span>
        </NavLink>
        <NavLink to={'/posts'} className={({ isActive }) => isActive ? activeTab : ''}>
          <span className="w-full px-3 py-3 hover:bg-zinc-200 hover:text-gray-900 rounded-lg transition-all cursor-pointer flex">
            <PostIcon classProps={"me-3"} />
            Posts
          </span>
        </NavLink>
        <NavLink to={'/drafts'} className={({ isActive }) => isActive ? activeTab : ''}>
          <span className="w-full px-3 py-3 hover:bg-zinc-200 hover:text-gray-900 rounded-lg transition-all cursor-pointer flex">
            <Pencilicon classProps={"me-3 size-6"} />
            Drafts
          </span>
        </NavLink>
      </div>
    </section>
  )
}