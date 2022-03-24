import React,{ useState } from 'react'
import './tag.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TagsInput = () => {
    const [tags, setTags] = useState([])
    const removeTags = indexToRemove =>{
        setTags(tags.filter((_, index) => index !== indexToRemove))
    }
    const addTags = event =>{
        if(event.target.value !== ''){
        setTags([...tags, event.target.value])
        event.target.value = '';
        }}
    return (
        <div className='tag-input'>
        <ul id='tags'>
            {
                tags.map((tag, index)=> <li key={index} className='tag'>
                <span className='tag-title'>{tag}</span>
                <HighlightOffIcon className='icon' onClick={()=> removeTags(index)} />
                
                                      </li>)
            }
        </ul>
        <input type='text' placeholder='please add email...'  onKeyUp={e => (e.key === 'Enter' ? addTags(e) : null)} />
    </div>
    )
}

export default TagsInput