import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/Resume_KarinaContini.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>

            <div className="about__right">
                <h2>About Me</h2>
                
                <p>
                I'm Karina Contini, a software developer with a Bachelor's degree in Industrial Engineering from Brazil. Currently, I'm sharpening my skills in Programming Analysis at LaSalle College in Canada. I'm passionate about problem-solving and eager to take on new challenges.                </p>
                <p>
                I'm actively seeking a job where I can apply my skills in various programming languages and leverage my background in graphic design. I'm ready to contribute and learn in a dynamic professional setting.                </p>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                            </Card>
                        ))
                    }
                </div>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About