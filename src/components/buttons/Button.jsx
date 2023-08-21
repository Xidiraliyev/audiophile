import './Button.css'
import { Link } from 'react-router-dom'
export function Button1({link}) {
    return (
        <div className='button button1'>
            <Link to={link}>See product</Link>
        </div>
    )
}