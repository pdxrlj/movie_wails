import "./movie.less"
import Icon from "supercons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Movie() {
    const [movieLists,setMovieLists]=useState([])
    const scrollRef = useRef(null);
    const [page,setPage]=useState(1)

    useEffect(()=>{
         axios.get(`http://127.0.0.1:8080/api/v1/movie/discover?page=${page}`).then((res)=>{
            setMovieLists(res.data.results)
        })
        setPage(page+1)
    },[])


    useEffect(() => {
        const node = scrollRef.current;
        if (!node) {
            return;
        }

        node.addEventListener('scroll', (event) => {
            if (node.scrollHeight - node.scrollTop === node.clientHeight) {
                axios.get(`http://127.0.0.1:8080/api/v1/movie/discover?page=${page}`).then((res)=>{
                    setMovieLists(res.data.results)
                })
                setMovieLists(movieLists.concat(movieLists))
                setPage(page+1)
            }
        });

        return () => {
            node.removeEventListener('scroll', () => {});
        };
    }, []);

    return (
        <div className={"movie_content"} ref={scrollRef}>
            { movieLists.map((movie,index)=>{
                return (
                    <div className={"movie_detail_items"} key={index}>
                        <div className={"movie_detail_item_cover"}>
                            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="变形金刚"/>
                        </div>
                        <div className={"movie_detail_item_desc"}>
                            { movie.overview }
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
                    </div>
                )
            })}



        </div>

    )
}