import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {
    const [uploadVideo, setUploadVideo] = useState({
        caption: "", imageURL: "", youtubeLink: ""
    })
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setUploadVideo({...uploadVideo,caption:"",imageURL: "", youtubeLink: ""})
    }
    const handleShow = () => setShow(true);

    console.log(uploadVideo);

    const getYoutubeEmbedLink = (Link)=>{
        if(Link.includes("v=")){
            let videoId = Link.split("v=")[1].slice(0,11)
            setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
        }else{
            setUploadVideo({...uploadVideo,youtubeLink:""})
            alert("Input Proper youtube link!!!")
        }
    }

    const handleUpload = async ()=>{
        // store upload video in http://localhost:3000/videos
        const {caption,imageURL,youtubeLink} = uploadVideo
        if(caption && imageURL && youtubeLink){
            // proceed to store video from http://localhost:5173/home to http://localhost:3000/videos
            const result = await uploadVideoAPI(uploadVideo)
            console.log(result);
            if(result.status>=200 && result.status<300){
                alert(`video '${result.data.caption}' uploaded successfully!!!`)
                setUploadVideoResponse(result.data)
                handleClose()
            }else{
                alert("API call Failed... Please try after some time!!!")
            }
        }else{
            alert ("please fill the form completely")
        }
    }

    return (
        <>
            <div className="d-flex">
                <h5>Upload A Video</h5>
                <Button onClick={handleShow} className="btn bg-secondary ms-2"> <i className="fa-solid fa-plus"></i> </Button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the Following</p>
                    <div className='border rounded border-secondary p-3'>
                        <FloatingLabel
                            controlId="floatingInputcaption"
                            label="Video Caption"
                            className="mb-3"
                        >
                        <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatinginputimg" label="Image Url" className='mb-3'>
                            <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="Image Url" />
                        </FloatingLabel>
                        
                        <FloatingLabel controlId="floatinginputlink" label="Youtube Video Link">
                            <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="YT Video Link" />
                        </FloatingLabel>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add

