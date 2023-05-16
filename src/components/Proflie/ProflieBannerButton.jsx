import { useNavigate } from 'react-router-dom'
import { RiSettingsLine, RiAddCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { useAuth, mutations } from '@/hooks'

const ProflieBannerButton = ({ username, following }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth()

  const canUpdateProfile = authUser?.user?.username === username

  const { mutate, isLoading } = mutations.Profile.useProfileFollow(username, following)

  const handleEditSettings = () => {
    navigate(`/settings`)
  }

  return (
    <>
      {canUpdateProfile ? (
        <button
          className='flex justify-center items-center gap-2 px-4 py-1 border border-gray-300 rounded text-sm text-gray-300 hover:bg-gray-500/50 hover:border-gray-100 hover:text-gray-100'
          onClick={handleEditSettings}
        >
          <RiSettingsLine size={16} />
          Edit Profile Settings
        </button>
      ) : (
        <button
          className='flex justify-center items-center gap-2 px-4 py-1 border border-gray-300 rounded text-sm text-gray-300 hover:bg-gray-500/50 hover:border-gray-100 hover:text-gray-100'
          onClick={() => mutate()}
          disabled={isLoading}
        >
          {following ? (
            <>
              <RiAddCircleLine size={16} />
              <span>Follow {username}</span>
            </>
          ) : (
            <>
              <RiCheckboxCircleFill size={16} />
              <span>Unfollow {username}</span>
            </>
          )}
        </button>
      )}
    </>
  )
}

export default ProflieBannerButton
