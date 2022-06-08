import React from "react";
import {Route, Routes} from "react-router-dom";
import ContainerView from "./Container";

const Comments = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={ContainerView}/>
                <Route path="/issues" element={<Comments/>} exact />
                {/*<Route path="/comments" element={}/>*/}
            </Routes>
        </div>
    )
}
export default Comments;