import { memo } from 'react'
import { Field, ErrorMessage } from 'formik'

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field as='select' id={name} name={name} {...rest} className='form-select'>
        <option value=''>Option</option>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} render={msg => <div className='form-error'>{msg}</div>} />
    </div>
  )
}

export default memo(Select)
