import axios from "axios";


const fetcher = (url:string) => fetch(url).then(res => res.json())

export default fetcher;