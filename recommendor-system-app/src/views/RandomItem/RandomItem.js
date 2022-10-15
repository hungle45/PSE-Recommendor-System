import React from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import logo from "./../../assets/images/logo.svg"
import './../../styles/RandomItem.scss'

class RandomItem extends React.Component {
    state = {

    }
    handleOnGetItem = (event) => {
        alert('dmm')
    }
    render() {
        return (
            <div className='random-container'>
                <button className="btn-ran" onClick={(event) => this.handleOnGetItem(event)}>Get Random Item</button>
                <div className="img-random"><img src={logo} alt="Random item image"></img></div>
                <div className="contianer">
                    <h3 className="ran-text head">Article description</h3>
                    <p className="ran-text">as asdf asdf asdc adasdf asdf asd fasd asdf adf asdf asdf asd fasdf asd asdf asdcasdc asdcasd asasx as</p>
                </div>
            </div>
        )
    }
}

export default RandomItem;