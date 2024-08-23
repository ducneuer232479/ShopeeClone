import Input from 'src/components/Input'

export default function Profile() {
  return (
    <div className='px-2 pb-10 bg-white rounded-sm shadow md:pb-20 md:px-7'>
      <div className='py-6 border-b border-b-gray-200'>
        <h1 className='text-lg font-medium text-gray-900 capitalize'>Hồ Sơ Của Tôi</h1>
        <div className='mt-1 text-sm text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <div className='flex flex-col-reverse mt-8 md:flex-row md:items-start'>
        <form className='flex-grow mt-6 md:pr-12 md:mt-0'>
          <div className='flex flex-col flex-wrap sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Email</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <div className='pt-3 text-gray-700'>vu***********@gmail.com</div>
            </div>
          </div>
          <div className='flex flex-col flex-wrap mt-6 sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Tên</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input classNameInput='w-full px-3 py-2 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='flex flex-col flex-wrap mt-2 sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Số điện thoại</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input classNameInput='w-full px-3 py-2 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='flex flex-col flex-wrap mt-2 sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Địa chỉ</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input classNameInput='w-full px-3 py-2 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='flex flex-col flex-wrap mt-2 sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Ngày sinh</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <div className='flex justify-between'>
                <select className='h-10 w-[32%] rounded-sm border border-black/10 px-3'>
                  <option disabled>Ngày</option>
                </select>
                <select className='h-10 w-[32%] rounded-sm border border-black/10 px-3'>
                  <option disabled>Tháng</option>
                </select>
                <select className='h-10 w-[32%] rounded-sm border border-black/10 px-3'>
                  <option disabled>Năm</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-200'>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 my-5'>
              <img
                src='https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lta8juihe9i176_tn'
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
            <input type='file' accept='.jpg,.jpeg,.png' className='hidden' />
            <button className='flex items-center justify-end h-10 px-6 text-sm text-gray-600 bg-white border rounded-sm shadow-sm'>
              Chọn ảnh
            </button>
            <div className='mt-3 text-gray-400'>
              <div>Dung lượng file tối đa 1 MB</div>
              <div>Định dạng:.JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
