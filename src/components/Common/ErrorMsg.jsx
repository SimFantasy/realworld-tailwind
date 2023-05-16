import { RiErrorWarningLine } from 'react-icons/ri'

const ErrorMsg = ({ error }) => {
  return (
    <div className='flex justify-start items-center w-full my-4 px-4 py-3 border border-red-300 bg-red-200 rounded-sm text-red-500'>
      <RiErrorWarningLine size={24} />
      <span className='font-semibold ml-2 mr-4'>Error</span>
      <div className='flex justify-start items-center h-full'>
        <span className='mr-1'>{Object.keys(error)} </span>
        {Object.values(error).map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default ErrorMsg
