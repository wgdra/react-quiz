import VideoHomePage from '../../assets/video-homepage.mp4'
import './Home.scss'

const Home = (props) => {
    return (
        <>
            <div className='home-container'>
                <video className='home-video' autoPlay muted loop>
                    <source 
                        src={VideoHomePage}
                        type='video/mp4'
                    />
                </video>

            </div>
        </>
    );
}

export default Home;