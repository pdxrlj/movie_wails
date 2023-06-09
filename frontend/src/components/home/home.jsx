import "./home.less";
import Icon from "supercons";
import {useState} from "react";

import Movie from "../movie/movie.jsx";
import {BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";

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
                <Movie />
                {/*<Router>*/}
                {/*    <Routes>*/}
                {/*        <Route path="/movie" element={<Movie/>}></Route>*/}
                {/*    </Routes>*/}
                {/*</Router>*/}
            </div>
        </div>
    )
}