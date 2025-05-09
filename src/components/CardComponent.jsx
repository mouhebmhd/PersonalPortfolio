import React from 'react'
import "../assets/styles/cardStyle.css"
export default class CardComponent extends React.Component {
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return (
        <div className="toolCard m-2 d-flex justify-content-center align-items-center">
        <p className=' text-light' style={{fontSize:"75px"}}>
         {this.props.children}
          </p>

        </div>
       
    )
  }
}
