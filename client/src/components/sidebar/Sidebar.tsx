import { NavLink } from 'react-router-dom'
// import HomeIcon from '../../assets/icons/HomeIcon'
// import Pencilicon from '../../assets/icons/Pencilicon'
// import PostIcon from '../../assets/icons/PostIcon'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PencilSquareIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { useState } from 'react';



export default function Sidebar() {

  // const [iconColor, setIconColor] = useState({ module: ''})

  const [activeModule, setActiveModule] = useState('')

  let activeTab: string = 'bg-violet-100 rounded-lg text-black';

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
    <Card className="h-screen w-full max-w-[17rem] p-4 fixed">
      <div className="mb-2 p-4">
        <h2 className="text-3xl text-black font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>
      </div>
      <List>
        {sidebarContent.map((item) => {
          return (
            <NavLink key={item.label} to={item.route} className={({ isActive }) => {

              if (isActive) {
                setActiveModule(item.label)
                return activeTab
              } else {
                setActiveModule('')
                return ''
              }
            }} >
              <ListItem className={`text-sm text-black hover:bg-violet-50 active:${activeModule === item.label ? activeTab : ''}`}>
                <ListItemPrefix className={`[&>svg:stroke-violet-600]`}>
                  {item.icon}
                </ListItemPrefix>
                {item.label}
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </Card>

  )
}
