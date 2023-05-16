import { Banner, MainView, Tags } from '@/components'

const Home = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Banner />
      <div className='container grid grid-cols-8 gap-6'>
        <div className='col-span-6'>
          <MainView />
        </div>
        <div className='col-span-2'>
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default Home
