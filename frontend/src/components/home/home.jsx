import "./home.less";
import Icon from "supercons";
import {useState} from "react";

export default function Home() {
    const [activityMenu, setActivityMenu] = useState("movie");
    const clickMenu = (menu) => {
        setActivityMenu(menu);
    }


    return (
        <div className={"home_detail"}>
            <header>
                <div>
                    <Icon glyph="explore" size={50} className={"home_detail_logo"}></Icon>
                </div>
                <div className={activityMenu==="movie"?"home_detail_menu_activity":"home_detail_menu"} onClick={(e)=>clickMenu("movie")}>
                    <span>
                        电影
                    </span>
                    <span></span>
                </div>
                <div className={activityMenu==="tv"?"home_detail_menu_activity":"home_detail_menu"} onClick={(e)=>clickMenu("tv")}>
                    <span>
                        电视剧
                    </span>
                    <span></span>
                </div>
                <div className={activityMenu==="tv_live"?"home_detail_menu_activity":"home_detail_menu"} onClick={(e)=>clickMenu("tv_live")}>
                    <span>电视直播</span>
                    <span></span>
                </div>
            </header>

            <div className={"home_detail_main"}>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
                <div className={"home_detail_items"}></div>
            </div>
        </div>
    )
}