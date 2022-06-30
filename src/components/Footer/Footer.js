
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.footer}>
            <p className={classes.textmarginBottom}>© {new Date().getFullYear()}{'.'} <a className={classes.copyrightLink} href="https://github.com/SmartHome101" target="_blank">Smart Home 101</a></p>
            <p className={classes.textmarginTop}>All rights reserved.</p>
        </div>
    )
}

export default Footer