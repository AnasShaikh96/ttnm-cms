import { NavLink } from "react-router-dom";
import ChevronRight from "../../assets/icons/ChevronRight";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import DraftsIcon from "../../assets/icons/DraftsIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import PostIcon from "../../assets/icons/PostIcon";

export default function Sidebar() {

  const sidebarContent = [
    {
      id: 1,
      title: 'Dashboard',
      url: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      id: 2,
      title: 'Posts',
      url: '/posts',
      icon: <PostIcon />
    },
    {
      id: 3,
      title: 'Drafts',
      url: '/drafts',
      icon: <DraftsIcon />
    },
  ]


  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              Application Layout
              <ChevronRight />
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
              Dashboard
            </li>
          </ol>

          <button type="button" className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Sidebar">
            <HamburgerIcon />
            <span className="sr-only">Sidebar</span>
          </button>
        </div>
      </div>

      <div id="application-sidebar" className="hs-overlay [--auto-close:lg]
            hs-overlay-open:translate-x-0
            -translate-x-full transition-all duration-300 transform
            w-[260px]
            hidden
            fixed inset-y-0 start-0 z-[60]
            bg-white border-e border-gray-200
            lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  
            dark:bg-neutral-800 dark:border-neutral-700">
        <div className="px-8 pt-4">
          <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/dashboard" aria-label="Preline">
            <h2 className="text-2xl text-center font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>
          </a>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            {sidebarContent.map((item) => (
              <li key={item.id}>
                <NavLink to={item.url}
                  className={({ isActive }) => {
                    let listStyle = "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"

                    if (isActive) return listStyle + " bg-gray-100"
                    
                    return listStyle;
                  }}
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}