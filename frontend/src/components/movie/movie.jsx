import "./movie.less"
import Icon from "supercons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Movie() {
    const page=useRef(1)
    const scrollRef = useRef(null);
    const isInit = useRef(false);

    const canScroll = useRef(true);

    let url = 'http://127.0.0.1:8081/api/v1/movie/discover?page='

    const [movieLists, setMovieLists] = useState([])
    useEffect(() =>{
        if (!isInit.current){
            isInit.current =true
            let requestUrl = `${url}${page.current}`
            axios.get(requestUrl).then((res) => {
                setMovieLists(res.data.results)

                page.current=page.current+1

                console.log("init movie lists",page.current)
            })
        }


        return () => {
            isInit.current=true
            page.current=1
            setMovieLists([])
        }
    },[])




    let fetchMoreData = () => {
        if (!page.current){
            return ""
        }
        let requestUrl = `${url}${page.current}`
        setTimeout(()=>{
            canScroll.current=true
        },5000)

        console.log("请求url:", requestUrl)
        axios.get(requestUrl).then((res) => {
            if (res.data && res.data.results && res.data.results.length===0){
                return
            }
            let newMovieLists = movieLists
            newMovieLists.push(...res.data.results)
            setMovieLists(newMovieLists)
        }).finally(()=>{
            page.current=page.current+1
            canScroll.current=true
            console.log("movie lists:", movieLists.length,"page:",page.current)
        })
    };


    const throttle=(fn, delay=50) =>{
        let timer = null
        return function(...args) {
            if(!timer) {   //n秒内一直触发，timer一直为null，就不会执行判断语句中的逻辑（关键）
                timer = setTimeout(() => {
                    fn.apply(this, args)
                    timer = null
                }, delay)
            }
        }
    }

    useEffect(() => {
        const node = scrollRef.current;
        if (!node && !canScroll.current) {
            return;
        }


        node.addEventListener("scroll", (e) => {
            // console.log("scroll event:", node.scrollHeight - node.scrollTop, node.clientHeight)
            if (node.scrollHeight - node.scrollTop > node.clientHeight){
                canScroll.current=true
                return
            }
            if ((node.scrollHeight - node.scrollTop <= node.clientHeight) && canScroll.current) {
                canScroll.current=false
                throttle(fetchMoreData,500)();
            }
        });

        return () => {
            node.removeEventListener("scroll", (e) => {});
        }
    },[movieLists]);

    return (
        <div className={"movie_scroll"}>
            <div className={"movie_content"} ref={scrollRef}>
                {movieLists?.map((movie, index) => (
                    <div className={"movie_detail_items"} key={index}>
                        <div className={"movie_detail_item_cover"}>
                            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="变形金刚"/>
                        </div>
                        <div className={"movie_detail_item_desc"}>
                            {movie.overview.length===0?"暂无简介":movie.overview.length>20?movie.overview.replace(/\s+/g,"").slice(0,20)+"...":movie.overview.replace(/\s+/g,"")}
                        </div>
                        <div className={"movie_detail_items_tags"}>
                            <span>
                                <Icon glyph={"emoji"} size={17} className={"movie_detail_items_tags_logo"}></Icon>
                                {movie.title.length>10?movie.title.slice(0,10)+"...":movie.title}
                            </span>
                            <span>
                                <Icon glyph={"clock"} size={17} className={"movie_detail_items_tags_time"}></Icon>
                                <span className={"movie_detail_items_tags_time_time"}>{movie.release_date}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={canScroll.current?"scroll_bottom_hidden":"scroll_bottom"}>
                <h4>Loading</h4>
            </div>
        </div>
    )
}