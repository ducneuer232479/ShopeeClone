import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full px-2 py-4 text-sm text-center text-white uppercase bg-red-500 hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='ml-1 text-red-400'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
