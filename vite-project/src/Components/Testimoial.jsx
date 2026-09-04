import "./Testimonial.css"


const Testimoial = ({name, avatar, text, course}) =>{
    return (
        <div className="review-card">
          <img className="review-card__avatar" src={avatar} alt={text} />
          <div className="review-card__content">
            <p className="review-card__text">{text}</p>
            <span className="review-card__author">{name}</span>
          </div>
        </div>
    )
}

export default Testimoial