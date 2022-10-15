import React from "react";
import './../../styles/SimilarItem.scss'

class SimilarItem extends React.Component {
    state = {
        hidden: true
    }
    handleShowHidden = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    render() {
        return (
            <div className='similar-container'>
                <div onClick={() => this.handleShowHidden()}>Similar Item</div>
                {
                    this.state.hidden ?
                        <></> :
                        <div>
                            Content
                        </div>
                }

            </div>
        )
    }
}

export default SimilarItem;