import { ProflieBannerButton } from '@/components'

const ProfileBanner = ({ username, image, following }) => {
  return (
    <div className='min-h-[240px] bg-[url("@/assets/images/banner-bg.jpg")] bg-no-repeat bg-[center_-670px] relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800/60 grid text-white'>
        <div className='flex flex-col justify-center items-center gap-2 min-w-[96px] m-auto'>
          <img
            src={image}
            className='w-24 h-24 rounded-full border-[8px] border-gray-50/60 shadow-lg hover:animate-spin cursor-pointer'
          />
          <h2 className='text-xl'>{username}</h2>
        </div>
        <div className='absolute bottom-4 right-4'>
          <ProflieBannerButton username={username} following={following} />
        </div>
      </div>
    </div>
  )
}

export default ProfileBanner
