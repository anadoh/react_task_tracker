import PropTypes from 'prop-types'

const Button = ({color, text2, onClick}) => {
    return (
        <button 
        onClick = {onClick}
        style= {{backgroundColor: color}}
         className='btn'>
             {text2}
             </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text2: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

