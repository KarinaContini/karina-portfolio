import Image1 from '../../assets/project1.png'
import Image2 from '../../assets/project2.png'
import Image3 from '../../assets/project3.png'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.jpg'
import Image6 from '../../assets/project6.png'
import Image7 from '../../assets/project7.png'
import Demo1 from '../../assets/demo_project1.png'
import Demo2 from '../../assets/demo_fruitseason.webm'
import Demo3 from '../../assets/demo_calculator.mp4'
import Demo4 from '../../assets/demo_gas_station.png'
import Demo5 from '../../assets/demo_API.png'
import Demo6 from '../../assets/demo_multitier.png'
import Demo7 from '../../assets/demo_android.webm'

const data = [
    {
        id: 1,
        category: 'Web',
        image: Image1,
        title: "OrderMaze Expedition",
        desc: "A game for kids using HTML, CSS, JavaScript, AJAX for Front-End, and MySQL and PHP for Back-End.",
        demo: Demo1,
        github: 'https://github.com/KarinaContini/PHP_GameWebsite.git'
    },
    {
        id: 2,
        category: 'Mobile',
        image: Image2,
        title: "FRUIT2GO",
        desc: "Android Application to help the user to find seasonal fruits. There is also an area to register sellers and their fruits. The app uses Firebase (Authentication, Realtime Database and Storage) and Google Maps Api.",
        demo: Demo2,
        github: 'https://github.com/KarinaContini/fruitseason.git'
    },
    {
        id: 3,
        category: 'Desktop',
        image: Image3,
        title: "Calculator, Lotto and Conversions",
        desc: "Multiform (.NET Framework) project, that covers 6 applications: Lotto Max, Lotto 649, Money Exchange, Temperature Conversion, Simple Calculator, IPv4 Validator",
        demo: Demo3,
        github: 'https://github.com/KarinaContini/calculator_lotto_conversions_IPvalidator.git'
    },
    {
        id: 4,
        category: 'Desktop',
        image: Image4,
        title: "Gas Station Management",
        desc: "Java console application - Piece of software to manage a Gas Station ",
        demo: Demo4,
        github: 'https://github.com/KarinaContini/java_gas_station.git'
    },
    {
        id: 5,
        category: 'Web',
        image: Image5,
        title: "French Verbs - API",
        desc: "An API using Flask framework and MongoDB",
        demo: Demo5,
        github: 'https://github.com/KarinaContini/Python_API_FrenchVerbs.git'
    },
    {
        id: 6,
        category: 'Desktop',
        image: Image6,
        title: "Teacher_Course Management",
        desc: "A full application with Windows Form for Front-End and Back-End with C# and Microsoft SQL Server",
        demo: Demo6,
        github: 'https://github.com/KarinaContini/teacher_course_management.git'
    },
    {
        id: 7,
        category: 'Mobile',
        image: Image7,
        title: "Calculator and Contacts",
        desc: "Android Application with calculator and contact list",
        demo: Demo7,
        github: 'https://github.com/KarinaContini/android_calculator_contacts.git'
    }
    
]


export default data