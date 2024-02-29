import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

   const [allVideos,setAllVideos] =useState([])
   const [deleteVideoResponse,setdeleteVideoResponse] = useState("")

   const getAllVideos = async ()=>{
      const result = await getAllVideosAPI()
      // console.log(result);
      if(result?.status==200){
         setAllVideos(result?.data);
      }
   }

   useEffect(()=>{
      getAllVideos()
   },[uploadVideoResponse,deleteVideoResponse])

   // console.log(allVideos);
   const dragOverView = (e)=>{
      e.preventDefault()
   }
   const handleCategoryVideo = async (e)=>{
      const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
      console.log(`Remove Video Id : ${videoId} From Category Id : ${categoryId}`);
   //get a category
   const {data} = await getSingleCategoryAPI(categoryId)
   const updatedVideolist = data.allVideos.filter(item=>item.id!=videoId)
   console.log(updatedVideolist);
   const {id,categoryName} = data
   const result = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedVideolist})
   setRemoveCategoryVideoResponse(result.data)
   }

  return (

     <>
     <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        { allVideos?.length>0? allVideos?.map((video,index)=>(
         <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <Videocard displayData={video} setdeleteVideoResponse = {setdeleteVideoResponse} />
        </Col>
        ))
        :
        <div className='text-danger fw-bolder'> No videos are uploaded yet!!!!</div>
        }
     </Row>
     </>
  )
}

export default View