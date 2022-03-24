import './upload.css'
import React from 'react';
import Dropzone from 'react-dropzone';
import TagsInput from './TagsInput'
import {Link} from 'react-router-dom'
function Upload(){
  return (
    <div className='main'>
<Dropzone onDrop={files => console.log(files)}>
  {({getRootProps, getInputProps}) => (
    <div className="container">
      <div className='heads'>
      <Link className='linkup' to='home'>Home</Link>
     <p classname='uploadp'>Upload a file</p>
     </div>
      <div
        {...getRootProps({
          className: 'dropzone',
          onDrop: event => event.stopPropagation()
        })}
      >
        <input {...getInputProps()} />
        <p className='dragp'>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <p className='share'>share to</p>
    </div>
  )}
</Dropzone>
<TagsInput />
</div>
  )
}


export default Upload
