


const name = "Rajib Raj"
const degi = "M.tech Student AIML"
const desc = "An AI/ML M.Tech student from IIT Kharagpur, passionate about solving complex problems using machine learning techniques. Strong programming skills, research-oriented, and dedicated to advancing AI technologies for real-world applications."


const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

const Author = () => {
    return (
        
        <div className="authors" >
             <h2>Top Creator</h2>
            <div className="author-thumb">
                <img src="assets/images/author/01.jpg" alt="rajibraj91" />
            </div>
            <div className="author-content">
                <h5>{name}</h5>
                <span>{degi}</span>
                <p>{desc}</p>
                <ul className="lab-ul social-icons">
                    {socialList.map((val, i) => (
                        <li key={i}>
                            <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Author;