import './Home.css'
import Profile from '../../components/Profile/Profile'
import Intro from '../../components/Intro/Intro'
import Joke from '../../components/Joke/Joke'

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