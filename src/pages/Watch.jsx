import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {

const [history,setHistory] = useState([])
const getAllHistory = async()=>{
  const result = await getHistoryAPI()
  if(result.status>=200 && result.status<300){
   setHistory(result.data)
  }
}
useEffect(()=>{
  getAllHistory()
},[])

const deleteHistory = async (vId)=>{
  // api call
  await removeHistoryAPI(vId)
  getAllHistory()
}

  return (
    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'}> <i className="fa-solid fa-arrow-left"></i>
        Back To <i className="fa-solid fa-home"></i>
        </Link>
      </div>
      <table className="table mt-5 mb-5 text-light">
        <thead>
          <tr>
            <th className='text-light'>#</th>
            <th className='text-light'>Caption</th>
            <th className='text-light'>Video Link</th>
            <th className='text-light'>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          { history?.length>0? history?.map((video,index)=>(
              <tr key={index}>
              <td className='text-light'>{index+1}</td>
              <td className='text-light'>{video?.caption}</td>
              <td className='text-light'><a href= {video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
              <td className='text-light'>{video?.timeStamp}</td>
              <td ><button onClick={()=>deleteHistory (video.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          ))
          :
          <tr className='text-danger fw-bolder'>Your Watch History is Empty!!!</tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Watch