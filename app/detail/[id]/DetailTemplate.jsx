"use client"

import { useEffect, useState } from "react"

const DetailTemplate = ({ result }) => {
  //댓글기능
  //1. useState를 이용해서 input data 담음
  //2. onClick + fetch를 통해 data전송
  //2.1 근데 data의 형태는
  //{
  // 댓글id:'~~', content:'input data',
  // author: 'email',parent(부모게시물의id):"ObjectId(id)"
  // } 꼴로 해주면 될 것 같음

  const [comment, setComment] = useState("")
  const [data, setData] = useState([])
  const parent = result._id
  const author = result.author

  console.log(data, "데이터")
  useEffect(() => {
    fetch(`/api/detail/getComment?id=${result._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result)
      })
  }, [result._id])

  const onChange = (e) => {
    e.preventDefault()
    setComment(e.target.value)
  }

  const onClick = () => {
    fetch("/api/detail/comment", {
      method: "POST",
      body: JSON.stringify({
        parent,
        author,
        comment,
      }),
    })
  }

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <>
              <div>
                -댓글칸-
                <p>{item.comment}</p>
              </div>
            </>
          ))
        ) : (
          <div>
            -댓글칸-
            <p>댓글없음</p>
          </div>
        )}
        <label htmlFor=""></label>
        <input type="text" onChange={onChange} />
        <button type="button" onClick={onClick}>
          댓글전송
        </button>
      </div>
    </div>
  )
}

export default DetailTemplate
