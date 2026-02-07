import { useEffect, useState } from "react"
import { Label } from "semantic-ui-react"
import { useAuthContext } from "../context/AuthProvider"
import { getAvatarDefault, getAvatarPorToken } from "../feature/profile/service/profile.api"

const FALLBACK_IMG = 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'

const ProfileImage = () => {

  const { authenticated } = useAuthContext()
  const [name, setName] = useState("")
  const [img, setImg] = useState(FALLBACK_IMG)

  useEffect(() => {

    const request = authenticated ? getAvatarPorToken() : getAvatarDefault()

    request
      .then(res => res.json())
      .then(data => {
        setName(data.name || "")
        setImg(data.img || FALLBACK_IMG)
      })
      .catch(() => {})

  }, [authenticated])

  return (
    <Label as='a' image>
      <img src={img} />
      {name}
    </Label>
  )
}

export default ProfileImage
