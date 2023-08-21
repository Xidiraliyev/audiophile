//React-Router-Dom
import { NavLink } from 'react-router-dom'

//CSS
import './CategoryCards.css'

//Images
import Arrow from '../../assets/img/arrow.svg'
import CategoryHeadPhone from '../../assets/img/category-headphone.png'
import CategorySpeaker from '../../assets/img/category-speaker.png'
import CategoryEarphone from '../../assets/img/category-earphone.png'

const CategoryCards = () => {
    const categoryData = [
        {title: "HEADPHONES", img:CategoryHeadPhone, link: '/headphones'},
        {title: "SPEAKERS", img:CategorySpeaker, link: '/speakers'},
        {title: "EARPHONES", img:CategoryEarphone, link: '/earphones'},
      ]

  return (
    <div className='category container'>
    <ul className='category-cards__list' >
        {categoryData.map((category) => {
            return(
                <li key={category.title} className="category-cards__item">
                <img className='category-cards__item__img' src={category.img} alt="" />
                <div className="category__info">
                <h4 className="category-cards__item__title">
                {category.title}
                </h4>
                <NavLink to={category.link} className="categoty-cards__item__link">
                    <p>Shop</p>
                    <img src={Arrow} width={5} height={10} alt="" />
                </NavLink>
                </div>
            </li>
            )
        })}
    </ul>
    </div>
  )
}

export default CategoryCards