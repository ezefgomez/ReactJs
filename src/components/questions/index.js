import React from 'react'
import "./styles.css"

const Questions = ({ title, answerAmount, views, likes}) => {

    return (
        <div className='questionsContainer'>

            <p>{title}</p>
            <p>{answerAmount}</p>
            <p>{views}</p>
            <p>{likes}</p>

        </div>
    )

}

export default Questions
