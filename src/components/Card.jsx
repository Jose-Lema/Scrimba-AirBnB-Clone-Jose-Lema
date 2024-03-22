import katie from '../images/katie-zaferes.png';
import star from '../images/star.png'
export default function Card(){
    return(
        <div className='card'>
            <img src={katie} alt="Katie Zaferes" className='card--image' />
            <div className='card--stats'>
                <img src={star} alt="Star" className='card--star' />
                <span>5.0</span>
                <span className = 'gray'>(6) •</span>
                <span className = 'gray'>USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>        
    )
}