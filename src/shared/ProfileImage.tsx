import { useEffect, useState } from "react"
import { Label } from "semantic-ui-react"
import { useAuthContext } from "../context/AuthProvider"
import { getAvatarDefault, getAvatarPorToken } from "../feature/profile/service/profile.api"
import { env } from "../environments/var-environments"

const ProfileImage = () => {

  const { authenticated } = useAuthContext()
  const [name, setName] = useState("")
  const [img, setImg] = useState(env.fallback_prof_img)

  useEffect(() => {

    const request = authenticated ? getAvatarPorToken() : getAvatarDefault()

    request
      .then(res => res.json())
      .then(data => {
        setName(data.name || "")
        setImg(data.img || env.fallback_prof_img)
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
