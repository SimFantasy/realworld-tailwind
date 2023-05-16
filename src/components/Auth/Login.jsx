import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { FormControl, ErrorMsg } from '@/components'
import { useAuth, mutations } from '@/hooks'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const initialVales = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter the correct email format')
      .required('email is required'),
    password: Yup.string()
      .min(6, 'Password requires at least 6 characters')
      .required('password is required')
  })

  const { mutate, isLoading, isError, error } = mutations.User.useLogin({
    onSuccess: data => {
      login(data)
      toast.success('login success ~')
      navigate('/home')
    }
  })

  const handleSubmit = async values => {
    mutate(values)
  }

  return (
    <div className='container content-area flex justify-center items-center'>
      <div className='min-w-[560px] h-[80vh] p-6'>
        <div className='text-center mb-10'>
          <h3 className='text-4xl text-gray-800 mb-4'>Sign in</h3>
          <Link to='/register' className='text-gray-400 hover:text-green-500'>
            Need an account?
          </Link>
        </div>
        {isError && <ErrorMsg error={error} />}
        <div>
          <Formik
            initialValues={initialVales}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form className='flex flex-col gap-4'>
                <FormControl
                  control='input'
                  label='Email'
                  name='email'
                  placeholder='Enter your email'
                />
                <FormControl
                  control='input'
                  type='password'
                  label='Password'
                  name='password'
                  placeholder='Enter your Password'
                />
                <div className='flex justify-end mt-4'>
                  <FormControl control='button' text='Login' disabled={isLoading} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
