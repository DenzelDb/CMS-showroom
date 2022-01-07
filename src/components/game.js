import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { image, name, wrapper, info, releaseYear} from "./game.module.css"

const Game = ({ game, slug }) => {
    const card = getImage(game.gameMeta.cover.localFile)
    return (
        <Link className={wrapper} to={slug}>
            <GatsbyImage className={image} image={card} alt="no image found"/>
            <div className={info}>
                <p className={releaseYear}>{game.gameMeta.releaseYear}</p>
                <p className={name}>{game.gameMeta.name}</p>
            </div>
        </Link>
    )
}

export default Game