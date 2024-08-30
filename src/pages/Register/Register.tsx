import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
// Không có tính năng tree-shaking (import mỗi omit nhưng thực ra là import cả thư viện)
// import { omit } from 'lodash'

// Import chỉ mỗi function omit
import omit from 'lodash/omit'

import Input from 'src/components/Input'
import { schema, Schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import path from 'src/constants/path'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          console.log('formError', error)
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  console.log(errors)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                placeholder='Email'
                errorMessage={errors.email?.message}
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                placeholder='Password'
                autoComplete='on'
                errorMessage={errors.password?.message}
              />
              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                placeholder='Confirm Password'
                autoComplete='on'
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-2'>
                <Button
                  type='submit'
                  className='flex items-center justify-center w-full gap-2 px-2 py-4 text-sm text-center text-white uppercase bg-red-500 hover:bg-red-600'
                  isPending={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                >
                  Đăng ký
                </Button>
              </div>

              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-300'>Bạn đã có tài khoản?</span>
                <Link to={path.login} className='ml-1 text-red-400'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
