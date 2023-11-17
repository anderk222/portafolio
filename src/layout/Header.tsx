import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import FullLoading from '../shared/FullLoading'
import ProfileImage from '../shared/ProfileImage'
import DropDownSideBar from './DropDownSideBar'
import AlertMessage from '../shared/AlertMessage'


const Header = () => {

  return (
    <div className='h-screen overflow-scroll'>
      <nav className='bg-transparent py-6 px-10 fixed z-20 w-full' >
        <ul className='flex justify-between'>
          <li>
            <DropDownSideBar />
          </li>
          <li className='h-fit' >
            <ProfileImage />
          </li>
        </ul>
      </nav>
      <div className='h-full w-full pt-16' >
        <AlertMessage content='This site is still under construction' />
        <Suspense fallback={<FullLoading />} >
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}


export default Header