import React from "react";

class Option extends React.Component {
    handleOnClick = (value) => {
        this.props.setOption(value)
    }
    render() {
        return (
            <div className='option-container'>
                <p className="rad-text rad-p">Try</p>
                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input"
                        name="rad"
                        defaultChecked
                        onClick={() => this.handleOnClick('FIND_SIMILAR')}
                    />
                    <div className="rad-design"></div>
                    <div className="rad-text">Find Similar Item</div>
                </label>

                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input"
                        name="rad"
                        onClick={() => this.handleOnClick('CUSTOMER_REC')}
                    />
                    <div className="rad-design"></div>
                    <div className="rad-text">Customer Recommendor</div>
                </label>
            </div>
        )
    }
}

export default Option;