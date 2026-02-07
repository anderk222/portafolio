import { useEffect, useState } from 'react';
import FloatCubeContainer from '../components/FloatCubeContainer'
import '../home.css';
import { getUserDetailDefault } from '../../user_detail/service/user-detail.api';
import { UserDetail } from '../../user_detail/model/user-detail';

function HomePage() {

  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    getUserDetailDefault()
      .then(res => res.json())
      .then((data: UserDetail) => setUserDetail(data))
      .catch(err => console.error('Error loading user detail:', err));
  }, []);

  const defaultText = `Hello my name is Anderson Macias, I'm tecnical in Software Developnennt 
I love programing, I enjoy to fix issues, develop wonderful things and learn new knowledges.
I call mayself as a fullStack developer 😀`;

  return (
    <div className="flex w-full h-full justify-center items-center" >
      <div className="z-10 flex p-8 flex-wrap flex-col" >
        <h2 className="text-9xl  text-gray-700 welcome">Welcome!</h2>
        <p className=" text-gray-700 w-fit text-lg  about">
          {userDetail?.homeText || defaultText}
        </p>
      </div>
      <FloatCubeContainer count={15} />
    </div>
  )
}

export default HomePage