import "./movie.less"
import Icon from "supercons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Movie() {
    const [movieLists, setMovieLists] = useState([])
    const scrollRef = useRef(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/movie/discover?page=1`).then((res) => {
            setMovieLists(res.data.results)
        })
        console.log("======================================1")
    }, [])


    useEffect(() => {
        const node = scrollRef.current;
        if (!node) {
            return;
        }

        debounce(node.addEventListener('scroll', (event) => {
            console.log("开始滚动了:", node.scrollHeight - node.scrollTop, node.clientHeight)
            if (node.scrollHeight - node.scrollTop <= node.clientHeight) {
                const CancelToken = axios.CancelToken;
                const source = CancelToken.source();
                if (movieLists.page+1==="NaN"){
                    return;
                }
                let url = `http://127.0.0.1:8080/api/v1/movie/discover?page=${movieLists.page + 1}`
                console.log("请求url:", url)
                axios.get(url,{cancelToken: source.token}).then((res) => {
                    setMovieLists([...movieLists, ...res.data.results])
                    console.log("到底了", movieLists)
                })


            }
        }), 1000)

        return () => {
            node.removeEventListener('scroll', () => {
            });
        };
    }, [movieLists.page]);


    const debounce = (fn, delay) => {
        let timeout;
        return function () {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn()
            }, delay)
        }
    }

    const throttle = (fn, delay) => {
        let timer;
        return function () {
            if (!timer) {
                fn.apply(this, arguments)
                timer = setTimeout(() => {
                    clearTimeout(timer)
                    timer = null
                }, delay)
            }
        }
    }


    return (<div className={"movie_content"} ref={scrollRef}>
            {movieLists.results?.map((movie, index) => {
                return (<div className={"movie_detail_items"} key={index}>
                    <div className={"movie_detail_item_cover"}>
                        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="变形金刚"/>
                    </div>
                    <div className={"movie_detail_item_desc"}>
                        {movie.overview}
                    </div>
                    <div className={"movie_detail_items_tags"}>
                            <span>
                                <Icon glyph={"emoji"} size={17} className={"movie_detail_items_tags_logo"}></Icon>
                                {movie.title}
                            </span>
                        <span>
                                <Icon glyph={"clock"} size={17} className={"movie_detail_items_tags_time"}></Icon>
                                <span className={"movie_detail_items_tags_time_time"}>{movie.release_date}</span>
                            </span>
                    </div>
                </div>)
            })}


        </div>

    )
}