

const SelectCatagory = ({select,setCategory}) => {
    return (
        <select defaultValue={select} onChange={(e)=>setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="all">Uncategorized</option>
            <option value="Software Develpment">Software Development</option>
            <option value="Artificial Intelligence(AI)">Artificial Intelligence</option>
            <option value="Machine Learning(ML)">Machine Learning</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Biotechnology"> Biotechnology and life-science</option>
            <option value="Environmental Science">Environmental science</option>
            <option value="Aerospace and Aeronautical Engineering">Aerospace and Aeronautical engineering</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Others">Others</option>
 
{/*             <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="environment">Environment</option>
            <option value="environmental">Environmental</option>
            <option value="events">Events</option>
            <option value="fitness">Fitness</option>
            <option value="food-shop">Food Shop</option>
            <option value="free">Free</option>
            <option value="gym">Gym</option>
            <option value="halloween">Halloween</option>
            <option value="health">health</option>
            <option value="healthcare">healthcare</option>
            <option value="learnpress">learnpress</option>
            <option value="meat-shop">Meat Shop</option>
            <option value="medical">medical</option>
            <option value="medical-prevention">Medical Prevention</option>
            <option value="meetup">Meetup</option>
            <option value="mobile-apps">Mobile Apps</option>
            <option value="music">Music</option>
            <option value="news">News</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="onepage">Onepage</option>
            <option value="online-course">Online Course</option>
            <option value="personal-blog">Personal Blog</option>
            <option value="portfolio">Portfolio</option>
            <option value="pregnancy">pregnancy</option>
            <option value="premium">premium</option>
            <option value="psd">psd</option>
            <option value="religion">Religion</option>
            <option value="restaurants">Restaurants</option>
            <option value="school">School</option>
            <option value="seo">SEO</option>
            <option value="software">Software</option>
            <option value="startups">Startups</option>
            <option value="university">University</option>
            <option value="vcard">Vcard</option>
            <option value="woocommerce">WooCommerce</option>
            <option value="yoga">Yoga</option>
            <option value="magazine">Magazine</option>
            <option value="event-wordpress">Event</option>   */}                      
        </select>
    );
}
 
export default SelectCatagory;