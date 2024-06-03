import { NavLink, useLocation } from 'react-router-dom'
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PencilSquareIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';



export default function Sidebar() {

  const location = useLocation();

  const [activeModule, setActiveModule] = useState('')

  useEffect(() => {

    const splitUrl = location.pathname.split(',');
    setActiveModule(splitUrl[0])

  }, [location.pathname])

  let isTabActive: string = 'bg-violet-100 rounded-lg text-black bg-opacity-100';
  let IsIconActive: string = "[&>svg]:stroke-violet-700 fill-violet-700";

  const sidebarContent = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: <PresentationChartBarIcon className={`h-5 w-5`} />
    },
    {
      label: 'Posts',
      route: '/posts',
      icon: <PencilSquareIcon className={`h-5 w-5`} />
    },
    {
      label: 'Drafts',
      route: '/drafts',
      icon: <NewspaperIcon className={`h-5 w-5`} />
    },
  ]


  return (
    <Card className="h-screen w-full max-w-[17rem] p-4 fixed rounded-none top-100 left-0">
      <div className="mb-2 p-4">
        <h2 className="text-3xl text-black font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>
      </div>
      <List>
        {sidebarContent.map((item) => {
          return (
            <NavLink key={item.label} to={item.route} className={({ isActive }) => isActive ? isTabActive : ''} >
              <ListItem className={`text-sm text-black hover:bg-violet-50 focus:${isTabActive} active:${isTabActive}`} selected={activeModule === item.route}>
                <ListItemPrefix className={activeModule === item.route ? IsIconActive : ''}>
                  {item.icon}
                </ListItemPrefix>
                {item.label}
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </Card >

  )
}
