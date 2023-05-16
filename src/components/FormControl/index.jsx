import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Button from './Button'
import TagInput from './TagInput'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'taginput':
      return <TagInput {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'button':
      return <Button {...rest} />
    default:
      return null
  }
}

export default FormControl
