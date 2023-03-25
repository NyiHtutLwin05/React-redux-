import React from 'react'
import { connect } from 'react-redux';

const ComponentC = ({userUi}) => {
    const{name,phone}=userUi;
  return (
    <div>
        ComC
        <p>username:{name} / phone:{phone}</p>
    </div>
  )
}
const mapStateToProps =(state)=>({ userUi:state?.user})   
export default connect(mapStateToProps,null)(ComponentC)