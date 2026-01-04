import './Profile.css'
import profile from '../../assets/profile.jpeg'


export default function Profile() {
    return (
        <img className="profile-img" src={profile} alt="Foto de perfil" />
    )
}