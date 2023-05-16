import { memo } from 'react'
import { Field, ErrorMessage } from 'formik'

const Input = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }) => (
          <input
            id={name}
            {...field}
            {...rest}
            value={field.value}
            onChange={field.onChange}
            className='form-input'
          />
        )}
      </Field>
      <ErrorMessage name={name} render={msg => <div className='form-error'>{msg}</div>} />
    </div>
  )
}

export default memo(Input)
