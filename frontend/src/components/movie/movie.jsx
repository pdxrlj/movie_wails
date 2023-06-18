import "./movie.less"
import Icon from "supercons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Movie() {
    // const page=useRef(1)
    const scrollRef = useRef(null);
    const isInit = useRef(false);

    const canScroll = useRef(true);
    const [pageCount, setPageCount] = useState(0);


    let url = 'http://127.0.0.1:8081/api/v1/movie/discover?page='

    const [movieLists, setMovieLists] = useState([])
    useEffect(() =>{
        if (!isInit.current){
            isInit.current =true
            let requestUrl = `${url}${pageCount+1}`
            axios.get(requestUrl).then((res) => {
                setMovieLists(res.data.results)
                setPageCount(res.data.page)
            }).finally(()=>{
                canScroll.current=false
                console.log("init movie lists",pageCount)
            })
        }


        return () => {
            isInit.current=false

            setMovieLists([])
        }
    },[])




    let fetchMoreData = () => {
        let requestUrl = `${url}${pageCount+1}`
        setTimeout(()=>{
            canScroll.current=false
        },5000)

        console.log("请求url:", requestUrl)
        canScroll.current=false
        axios.get(requestUrl).then((res) => {
            if (res.data && res.data.results && res.data.results.length===0){
                return
            }
            setMovieLists(movieLists.concat(res.data.results))
            setPageCount(res.data.page)
        }).finally(()=>{
            canScroll.current=false
        })
    };


    const throttle=(fn,endFn, delay=50) =>{
        let timer = null
        return function(...args) {
            if(!timer) {   //n秒内一直触发，timer一直为null，就不会执行判断语句中的逻辑（关键）
                timer = setTimeout(() => {
                    fn.apply(this, args)
                    endFn()
                    timer = null
                }, delay)
            }
        }
    }

    useEffect(() => {
        const node = scrollRef.current;
        if (!node) {
            return;
        }

        if (canScroll.current===false){
            canScroll.current=true
        }else{
            return ;
        }

        node.addEventListener("scroll", (e) => {
            if (((node.scrollHeight - node.scrollTop)-10 <= node.clientHeight) && canScroll.current) {
                console.log("fetch more data",canScroll.current)
                canScroll.current=false
                throttle(fetchMoreData,()=>{
                    // 滚动条回到指定位置第一次的位置
                    // node.scrollTop= node.scrollHeight - node.clientHeight
                    console.log("scroll-end:",(node.scrollHeight - node.scrollTop),node.clientHeight)

                },500)();
            }
        });

        return () => {
            node.removeEventListener("scroll", (e) => {});
        }
    },[movieLists]);

    return (

            <div className={"movie_scroll"} >
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
                <div className={canScroll.current?"scroll_bottom":"scroll_bottom_hidden"}>
                    <h4>Loading</h4>
                </div>
            </div>

    )
}