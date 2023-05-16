import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { isEmpty } from 'lodash-es'
import toast from 'react-hot-toast'
import { FormControl, Loading } from '@/components'
import { queries, mutations, useAuth } from '@/hooks'

const Editor = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const isUpdate = !isEmpty(slug)

  const { data, isLoading } = queries.Article.useArticle({
    enabled: !!isUpdate
  })

  const { mutate, isLoading: mutateIsLoading } = mutations.Article.useArticleCreate()

  if (isUpdate && isLoading)
    return (
      <div className='flex justify-center items-center p-6'>
        <Loading />
      </div>
    )

  const initialVales = {
    title: isUpdate ? data.article.title : '',
    description: isUpdate ? data.article.description : '',
    body: isUpdate ? data.article.body : '',
    tagList: isUpdate ? data.article.tagList : []
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('title is required'),
    description: Yup.string(),
    body: Yup.string().required('body is required'),
    tagList: Yup.array().of(Yup.string())
  })

  const handleSubmit = values => {
    const body = { ...values, tagList: values.tagList.join(', ') }
    console.log('body', body)
    mutate(body, {
      onSuccess: data => {
        toast.success('Article create success ~')
        navigate(`/article/${data?.article?.slug}`)
      }
    })
  }

  return (
    <div className='container py-6'>
      <div className='flex flex-col gap-6 w-[60vw] mx-auto'>
        <h2 className='text-xl text-gray-800'>Your Settings</h2>
        <Formik
          initialValues={initialVales}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form className='flex flex-col gap-4'>
              <FormControl control='input' label='Title' name='title' placeholder='Title' />
              <FormControl
                control='input'
                label='Description'
                name='description'
                placeholder='What is this about article'
              />
              <FormControl
                control='textarea'
                label='Content'
                name='body'
                placeholder='Write your article (in markdown)'
                className='min-h-[240px]'
              />
              <FormControl
                control='taginput'
                label='Tags'
                name='tagList'
                placeholder='Enter tags'
                value={formik.values.tagList}
                setFieldValue={formik.setFieldValue}
              />
              <div className='flex justify-end items-center'>
                <FormControl control='button' text='Update settings' disabled={mutateIsLoading} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Editor
