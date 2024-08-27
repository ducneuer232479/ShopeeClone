import { useContext } from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { getAvatarUrl } from 'src/utils/utils'

export default function UserSideNav() {
  const { profile } = useContext(AppContext)

  return (
    <div>
      <div className='flex items-center py-4 border-b border-b-gray-200'>
        <Link to={path.profile} className='flex-shrink-0 w-12 h-12 overflow-hidden border border-black rounded-full'>
          <img src={getAvatarUrl(profile?.avatar)} alt='' className='object-cover w-full h-full' />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 font-semibold text-gray-600 truncate'>{profile?.email}</div>
          <Link to={path.profile} className='flex items-center text-gray-500 capitalize'>
            <svg
              width={12}
              height={12}
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: 4 }}
            >
              <path
                d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                fill='#9B9B9B'
                fillRule='evenodd'
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className='mt-7'>
        <Link to={path.profile} className='flex items-center capitalize transition-colors text-orange'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
          Tài khoản của tôi
        </Link>
        <Link to={path.changePassword} className='flex items-center mt-4 text-gray-600 capitalize transition-colors'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
          Đổi mật khẩu
        </Link>
        <Link to={path.historyPurchase} className='flex items-center mt-4 text-gray-600 capitalize transition-colors'>
          <div className='mr-3 h-[22px] w-[22px]'>
            <img
              src='https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078'
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
          Đơn mua
        </Link>
      </div>
    </div>
  )
}
