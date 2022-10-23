import React from "react";
import './../styles/App.scss'

class SimilarItem extends React.Component {
    state = {
        hidden: false
    }
    handleShowHidden = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    render() {
        return (
            <div className='similar-container'>
                <div onClick={() => this.handleShowHidden()}>{this.props.title}</div>
                {
                    this.state.hidden ?
                        <></> :
                        <>
                            {this.props.array_item_id.map((id, index) => {
                                let folder = id.substring(0, 3)
                                let src = `/images/${folder}/${id}.jpg`
                                return (
                                    <img key={id + index} src={src} alt="jpg" ></img>
                                )
                            })}
                        </>
                }

            </div>
        )
    }
}

export default SimilarItem;