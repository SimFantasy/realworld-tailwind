import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormControl, ErrorMsg } from '@/components'
import { useAuth, mutations } from '@/hooks'

const Register = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const initialVales = {
    username: '',
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Please enter a minimum of 3 characters')
      .max(24, 'Please enter up to 24 characters')
      .required('username is required'),
    email: Yup.string()
      .email('Please enter the correct email format')
      .required('email is required'),
    password: Yup.string()
      .min(6, 'Password requires at least 6 characters')
      .required('password is required')
  })

  const { mutate, isLoading, isError, error } = mutations.User.useRegister({
    onSuccess: data => {
      login(data)
      toast.success('register success ~')
      navigate('/home')
    }
  })

  const handleSubmit = async values => {
    // console.log('values', values)
    mutate(values)
  }

  return (
    <div className='container content-area flex justify-center items-center'>
      <div className='min-w-[560px] h-[80vh] p-6'>
        <div className='text-center mb-10'>
          <h3 className='text-4xl text-gray-800 mb-4'>Sign up</h3>
          <Link to='/login' className='text-gray-400 hover:text-green-500'>
            Has an account?
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
                  label='Username'
                  name='username'
                  placeholder='Enter your username'
                />
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
                  <FormControl control='button' text='Register' disabled={isLoading} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
