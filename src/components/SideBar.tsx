import style from '../style/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

interface Props {
    toggleTheme(): void;
}

export function SideBar({ toggleTheme }: Props) {
    return (
        <div className={style.SideBarcontainer}>
            <img src="/favicon.png" alt="sideBar logo" />

            <div className={style.ButtonSideBar}>
                <button type="button">
                    <img src="icons/web-house.svg" alt="Home Page" />
                </button>

                <button type="button">
                    <img src="icons/ranking.svg" alt="Rank" />
                </button>
            </div>

            <div className={style.switcher}>
                <ThemeSwitcher handleToggleTheme={toggleTheme} />
            </div>
        </div>
    )
}

/*
            <div>
               <button type="button">
                   <img src="icons/web-house.svg" alt="Home Page" />
               </button>

               <footer>
                   <button type="button">
                       <img src="icons/ranking.svg" alt="Rank" />
                   </button>
               </footer>
           </div>
       </div>



}*/


