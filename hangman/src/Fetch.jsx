import React from 'react'
import axios from "axios"
function Fetch() {
   axios.get("https://my-json-server.typicode.com/aaryan-rawat-au8/mockjson/db").then(res=>console.log(res.data.movie[0])).catch(err=>console.log(err))
    return (
        <div>
        </div>
    );
}

export default Fetch
