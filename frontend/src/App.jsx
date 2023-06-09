import {useState} from 'react';
import Icon from "supercons"

import {BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";

import Home from "./components/home/home.jsx"

import "./app.less";

function App() {
const [activateItem,setActivateItem]=useState("home")

    const selectItem= function (className){
        setActivateItem(className)
    }

    return (
        <div id="App" className={"movie_app"}>
            <aside className={"aside"}>
                <div className={activateItem==="back"?"back_active":"back"} onClick={(e)=>selectItem("back")}>
                    <Icon glyph="view-back" size={30}></Icon>
                </div>
                <div className={activateItem==="home"?"active":"home"} onClick={(e)=>selectItem("home")}>
                    <Icon glyph="home" size={30}></Icon>
                    <span>首页</span>
                </div>
                <div className={activateItem==="dynamic"?"active":"dynamic"} onClick={(e)=>selectItem("dynamic")}>
                    <Icon glyph="message" size={33}></Icon>
                    <span>动态</span>
                </div>
                <div className={activateItem==="me"?"active":"me"} onClick={(e)=>selectItem("me")}>
                    <Icon glyph="sam" size={30}></Icon>
                    <span>我的</span>
                </div>
                <div className={activateItem==="setting"?"active_setting":"setting"} onClick={(e)=>selectItem("setting")}>
                    <Icon glyph="settings" size={35}></Icon>
                </div>
            </aside>
            <main className={"content_main"}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                </Router>
            </main>
        </div>
    )
}

export default App
