import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import config from 'src/constants/config'

interface Props {
  onChange?: (file?: File) => void
}

export default function InputFile({ onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]
    if (fileFromLocal && (fileFromLocal.size >= config.maxSizeUploadAvatar || !fileFromLocal.type.includes('image'))) {
      toast.error('Dung lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG', {
        position: 'top-center'
      })
    } else {
      onChange && onChange(fileFromLocal)
    }
  }

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input
        type='file'
        accept='.jpg,.jpeg,.png'
        className='hidden'
        ref={fileInputRef}
        onChange={onFileChange}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(event) => ((event.target as any).value = null)}
      />
      <button
        className='flex items-center justify-end h-10 px-6 text-sm text-gray-600 bg-white border rounded-sm shadow-sm'
        type='button'
        onClick={handleUpload}
      >
        Chọn ảnh
      </button>
    </>
  )
}
