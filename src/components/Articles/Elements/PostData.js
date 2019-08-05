import React from 'react'
import style from '../articles.css'
export default function PostData(props) {
    return (
        <div className={style.articlePostData}>
            <div>
                Date:
                    <span>{props.data.date}</span>
            </div>
            <div>
                Author:
                    <span>{props.data.author}</span>
            </div>
        </div>
    )
}
