import { memo } from 'react'
import cx from 'clsx'

const Button = ({ text, className, ...rest }) => {
  return (
    <button type='submit' className={cx('form-button', className)} {...rest}>
      {text}
    </button>
  )
}

export default memo(Button)
