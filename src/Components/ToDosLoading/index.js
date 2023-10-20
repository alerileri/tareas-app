import React from "react";
import './ToDosLoading.css'

function ToDosLoading() {
    return (
        <span className="loader-container">
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </span>

    )
}

export { ToDosLoading }