import React from "react"

import "../../../styles/css/components/atoms/button/KeywordFilter.css"

function KeywordFilter() {
  return (
    <>
        <div style={{ display: "flex" }}>
            <button className="keyword-filter">Keyword1</button>
            <button className="keyword-filter">Keyword11</button>
            <button className="keyword-filter">Keyword111</button>
        </div>
    </>
  )
}

export default KeywordFilter