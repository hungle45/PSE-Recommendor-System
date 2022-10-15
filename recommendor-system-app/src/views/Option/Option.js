import React from "react";
import './../../styles/Option.scss'

class Option extends React.Component {
    render() {
        return (
            <div className='option-container'>
                <p className="rad-text rad-p">Try</p>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" checked />
                    <div class="rad-design"></div>
                    <div class="rad-text">Find Similar Item</div>
                </label>

                <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" />
                    <div class="rad-design"></div>
                    <div class="rad-text">Customer Recommendor</div>
                </label>
            </div>
        )
    }
}

export default Option;