import React from 'react'

function Article ({title, preview, minutes, date = "January 1, 1970"}) {
    const numberOfCups = Math.floor(parseInt(minutes) / 5)
    let coffeeCups = ""
    for (let index = 0; index < numberOfCups; index++) {
        coffeeCups = coffeeCups + "☕"

    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>  {coffeeCups} {minutes} min to read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article