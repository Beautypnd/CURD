import { Link } from "react-router-dom"
import style from "./findcoder.module.css"
const Menu=()=>{
    return(
        <ol id={style.menuBlock}>
           <li> <Link to ="/">Explore Work</Link></li>
           <li> <Link to ="/a">Hire Talents</Link></li>
           <li> <Link to ="/dev">Dev Board</Link></li>
           <li> <Link to ="/c">challenges  \/</Link></li>

        </ol>
    )
}
export default Menu