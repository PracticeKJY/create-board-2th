"use client"

import { useEffect, useState } from "react"

const DetailTemplate = ({ result }) => {
  console.log(result)

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <div>
        <div>댓글</div>
        <label htmlFor=""></label>
        <input type="text" />
        <button>댓글전송</button>
      </div>
    </div>
  )
}

export default DetailTemplate
