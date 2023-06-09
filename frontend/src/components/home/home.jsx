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
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div> <div className={"home_detail_items"}>
                <div className={"home_detail_item_cover"}>
                    <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                </div>
                <div className={"home_detail_item_desc"}>
                    故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                </div>
                <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                    <span>七天前</span>
                </div>
            </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>
                <div className={"home_detail_items"}>
                    <div className={"home_detail_item_cover"}>
                        <img src="https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2892024245.jpg" alt="变形金刚"/>
                    </div>
                    <div className={"home_detail_item_desc"}>
                        故事重返上世纪90年代，终极反派宇宙大帝（科尔曼·多明戈 Colman Domingo 配音）从天而降，驱使以天灾（彼特·丁拉基 Peter Dinklage 配音）为首的恐惧兽掀起地球危机。绝境之中，蛰伏许久的巨无霸终觉醒，联合汽车人变形出发，一场前所未有的决战即将上演。
                    </div>
                    <div className={"home_detail_items_tags"}>
                        <span>
                            <Icon glyph={"emoji"} size={17} className={"home_detail_items_tags_logo"}></Icon>
                            派大星
                        </span>
                        <span>七天前</span>
                    </div>
                </div>

            </div>
        </div>
    )
}