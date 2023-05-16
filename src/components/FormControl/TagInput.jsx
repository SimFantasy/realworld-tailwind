import { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { RiCloseLine } from 'react-icons/ri'
const TagsInput = ({ label, name, value, setFieldValue, ...rest }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const tag = e.target.value.trim()
      if (tag.length > 0 && !value.includes(tag)) {
        setFieldValue(name, [...value, tag])
        setInputValue('')
      }
    }
  }
  const removeTag = index => {
    const newTags = [...value]
    newTags.splice(index, 1)
    setFieldValue(name, newTags)
  }
  const handleInputChange = e => {
    setInputValue(e.target.value)
    setError('')
  }
  const handleBlur = () => {
    const tag = inputValue.trim()
    if (tag.length > 0 && !value.includes(tag)) {
      setFieldValue(name, [...value, tag])
      setInputValue('')
    } else if (tag.length > 0 && value.includes(tag)) {
      setError('Tag already exists')
    } else {
      setError('')
    }
  }
  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }) => (
          <>
            <input
              id={name}
              {...field}
              {...rest}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className='form-input'
            />
          </>
        )}
      </Field>
      {error && <div className='form-error'>{error}</div>}
      <ErrorMessage name={name} render={msg => <div className='form-error'>{msg}</div>} />
      <div className='flex flex-wrap my-2 gap-2'>
        {value.map((tag, index) => (
          <div key={index} className='pl-3 h-8 flex justify-start items-center bg-gray-200 rounded'>
            <span className='mr-2'>{tag}</span>
            <button
              type='button'
              onClick={() => removeTag(index)}
              className='text-center ml-1 px-2 h-full text-gray-500 rounded hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:bg-gray-300'
            >
              <RiCloseLine size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TagsInput
