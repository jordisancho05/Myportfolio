import './Home.css'
import Profile from '../../components/profile/Profile'
import Intro from '../../components/intro/Intro'
import Joke from '../../components/joke/Joke'

export default function Home() {
    return (
        <main className="home">
            <div className="home-text">
                <Intro />
                <Joke />
            </div>
            <div className="home-profile">
                <Profile />
            </div>
        </main>
    )
}