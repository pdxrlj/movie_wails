import "./movie.less"
import Icon from "supercons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Movie() {
    // const page=useRef(1)
    const scrollRef = useRef(null);
    const isInit = useRef(false);

    // const canScroll = useRef(true);
    const [currentUpdate,setCurrentUpdate]=useState(false)

    const [pageCount, setPageCount] = useState(0);


    let url = 'http://127.0.0.1:8081/api/v1/movie/discover?page='

    const [movieLists, setMovieLists] = useState([])
    useEffect(() =>{
        if (!currentUpdate){
            isInit.current =true
            setCurrentUpdate(true)
            let requestUrl = `${url}${pageCount+1}`
            axios.get(requestUrl).then((res) => {
                setMovieLists(res.data.results)
                setPageCount(res.data.page)
            }).finally(()=>{
                // canScroll.current=false
                setCurrentUpdate(false)
                console.log("init movie lists",pageCount)
            })
        }


        return () => {
            setMovieLists([])
        }
    },[])




    let fetchMoreData = () => {
        let requestUrl = `${url}${pageCount+1}`
        console.log("====请求url:", requestUrl)
        axios.get(requestUrl).then((res) => {
            if (res.data && res.data.results && res.data.results.length===0){
                return
            }
            setMovieLists(movieLists.concat(res.data.results))
            setPageCount(res.data.page)
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

        node.addEventListener("scroll", (e) => {
            let clientHeight = node.clientHeight
            let scrollTop =  node.scrollTop;
            let scrollHeight =node.scrollHeight;

            // console.log("clientHeight:",clientHeight,"scrollTop:", scrollTop,"scrollHeight:",scrollHeight,canScroll.current)
            if ((clientHeight + scrollTop >= scrollHeight)) {
                setCurrentUpdate(true)
                throttle(fetchMoreData,()=>{},500)();
                setTimeout(() =>{
                    // 设置滚动条到底部
                    node.scrollTop = scrollHeight-300;

                    setCurrentUpdate(false)
                },2000)
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
                <div className={currentUpdate?"scroll_bottom":"scroll_bottom_hidden"}>
                    <div className="loader">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square last"></div>
                        <div className="square clear"></div>
                        <div className="square"></div>
                        <div className="square last"></div>
                        <div className="square clear"></div>
                        <div className="square "></div>
                        <div className="square last"></div>
                    </div>
                </div>
            </div>

    )
}