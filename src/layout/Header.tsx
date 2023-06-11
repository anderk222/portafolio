import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ProfileImage from '../shared/ProfileImage'
import DropDownSideBar from './DropDownSideBar'


const Header = () => {
  return (
    <div className='h-screen min-h-screen'>
    <nav className='bg-transparent py-6 px-10 w-full' >
        <ul className='flex justify-between'> 
            <li>
                <DropDownSideBar />
            </li>
            <li className='h-fit' >
              <ProfileImage />  
            </li>
        </ul>
    </nav>
    <Suspense fallback={<p>loading</p>} >
     <Outlet />
     </Suspense>
    </div>
    )
}


export default Header