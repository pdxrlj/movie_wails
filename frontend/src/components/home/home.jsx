import "./home.less";
import Icon from "supercons";
import {useEffect, useState} from "react";

import Movie from "../movie/movie.jsx";
import { Route,Routes,useNavigate} from "react-router-dom";
import Tv from "../tv/tv.jsx";


export default function Home() {
    const [activityMenu, setActivityMenu] = useState("movie");
    const navigate = useNavigate();
    const clickMenu = (menu) => {
        setActivityMenu(menu);
        navigate("/home/"+menu,{replace: false});
    }

    if (activityMenu===""){
        navigate("/home/movie",{replace: false})
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

            <div>
                <Routes>
                    <Route index element={<Movie/>}></Route>
                    <Route path="/movie"  element={<Movie/>}></Route>
                    <Route path="/tv" element={<Tv/>}></Route>
                </Routes>
            </div>
        </div>
    )
}