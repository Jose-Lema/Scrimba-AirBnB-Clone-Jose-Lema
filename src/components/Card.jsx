import star from '../images/star.png'
export default function Card(props){
    return(
        <div className='card'>
            <img src={`src/images/${props.img}`} className='card--image' />
            <div className='card--stats'>
                <img src={star} alt="Star" className='card--star' />
                <span>{props.rating}</span>
                <span className = 'gray'>({props.reviewCount}) •</span>
                <span className = 'gray'>{props.location}</span>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>        
    )
}