import React from "react";

const QuestionsList = ({ title, children}) => {

    return (

        <div>
            <h1>
                {title}
            </h1>
            {children}
        </div>

    )

}

export default QuestionsList