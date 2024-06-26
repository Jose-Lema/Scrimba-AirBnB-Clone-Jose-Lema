import photoGrid from '../images/photo-grid.png'

export default function Hero(){
    return(
        <section className='hero'>
            <img src={photoGrid} className='hero--photo' alt="Gallery of photos" />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts. All without leaving your home.</p>
        </section>
    )
}