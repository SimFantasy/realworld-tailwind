import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { FormControl, ErrorMsg } from '@/components'
import { mutations } from '@/hooks'

const CommentEditor = ({ slug, avatar }) => {
  const initialVales = {
    body: ''
  }

  const validationSchema = Yup.object({
    body: Yup.string().required('comment content is required')
  })

  const { mutate, isLoading, isError, error } = mutations.Comment.useCommentCreate(slug)

  const handleSubmit = ({ body }, { resetForm }) => {
    console.log('body', body)
    mutate(body)
    toast.success('Post comment success ~')
    resetForm()
  }

  return (
    <>
      {isError && <ErrorMsg error={error} />}

      <div className='border border-gray-300 rounded bg-gray-200'>
        <Formik
          initialValues={initialVales}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              <FormControl
                control='textarea'
                name='body'
                placeholder='Write a comment ...'
                className='bg-white border-none'
              />
              <div className='flex justify-between items-center p-3'>
                <img src={avatar} className='rounded-full w-8 h-8' />
                <FormControl
                  control='button'
                  text='Post comment'
                  className='py-1 px-2 text-sm'
                  disabled={isLoading}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default CommentEditor
