import React from 'react'
import cl from './First.module.css'
const First = (props) => {
  return (
    <div className={cl.text}>
    <ul><li>{props.text.name}</li></ul>
    <ul><li>{props.text.age}</li></ul>

    </div>
  )
}

export default First