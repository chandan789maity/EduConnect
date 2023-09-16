


const subTitle = "About Our EduConnect";
const title = "Discover the Story Behind EduConnect's Mission.";
const desc = "Edu Connect is a dynamic online platform dedicated to fostering collaboration and inspiration among educational institutions. Founded with a passion for advancing learning, Edu Connect provides colleges with a space to proudly showcase their students' projects, offering a vast repository of knowledge and creativity. Students from diverse colleges can explore these projects for inspiration and learn from the experiences of their peers, transcending institutional boundaries.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Cross-Collaboration',
        desc: 'Edu Connect breaks down the silos between colleges, enabling students to explore and draw inspiration from a wide range of projects from different institutions.',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Knowledge Sharing',
        desc: `Colleges can proudly display their student's projects, creating a valuable repository of educational content that fosters learning and innovation.`,
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Inspiration Hub',
        desc: 'Edu Connect serves as a hub for students seeking inspiration, providing a platform to ignite creativity and drive academic excellence across the educational landscape.',
    },
]


const About = () => {
    // return (
    //     <div className="about-section">
    //         <div className="container">
    //             <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
    //                 <div className="col">
    //                     <div className="about-right padding-tb">
    //                         <div className="section-header">
    //                             <span className="subtitle">{subTitle}</span>
    //                             <h2 className="title">{title}</h2>
    //                             <p>{desc}</p>
    //                         </div>
    //                         <div className="section-wrapper">
    //                             <ul className="lab-ul">
    //                                 {aboutList.map((val, i) => (
    //                                     <li key={i}>
    //                                         <div className="sr-left">
    //                                             <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
    //                                         </div>
    //                                         <div className="sr-right">
    //                                             <h5>{val.title}</h5>
    //                                             <p>{val.desc}</p>
    //                                         </div>
    //                                     </li>
    //                                 ))}
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="col">
    //                     <div className="about-left">
    //                         <div className="about-thumb">
    //                             <img src="assets/images/about/01.png" alt="about" />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
 
export default About;