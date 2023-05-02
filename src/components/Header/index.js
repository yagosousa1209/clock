import './header.css'

const Header = (props) => {
    return (
        <header className='header'>
            <div></div>

            <h3>HORÁRIO</h3>

            <button onClick={props.actionClick}>{props.text}</button>
        </header>
    )
}

export default Header