import React from "react"
import { wrapper, title, socials, instagram, facebook} from './footer.module.css'

const Footer = ({siteTitle}) => {
    return (
        <div className={wrapper}>
            <div>
                <p className={title}>{siteTitle}</p>
                <p>All rights reserved.</p>
            </div>
            <div className={socials}>
                Follow us:
                <a className={facebook} target="__blank"/>
                <a className={instagram} target="__blank"/>
            </div>
        </div>
    )
}

export default Footer