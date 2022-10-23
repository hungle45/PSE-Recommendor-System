import React from "react";
import baseUserCSV from './../store/data_extraction/user_base/recommend_base_user.csv';
import csvToJson from './csvToJson';
import transactionCSV from './../store/data/transactions_train_sample.csv'
import './../styles/App.scss';
let baseUserData, transactionData

class RandomItem extends React.Component {
    state = {
        history_item_id: []
    }
    handleOnClick = (event) => {
        let index = Math.floor(Math.random() * baseUserData.length)
        let id = baseUserData[index].customer_id
        let data = baseUserData[index]
        this.props.setRandomId(id, data)
        this.props.setStart()
        let array_history_item_id = transactionData.filter((value, index) => {
            return value.customer_id === id
        })
        array_history_item_id = array_history_item_id.map((value, index) => {
            return value.article_id
        })
        this.setState({
            history_item_id: array_history_item_id.filter((value, index) => {
                return array_history_item_id.indexOf(value) === index
            })
        })
        console.log(this.state.history_item_id)
    }
    componentDidMount() {
        fetch(baseUserCSV)
            .then(r => r.text())
            .then(text => {
                baseUserData = csvToJson(text)
            })
        fetch(transactionCSV)
            .then(r => r.text())
            .then(text => {
                transactionData = csvToJson(text)
            })

    }
    render() {
        let { start } = this.props
        return (
            <div className='ran-container'>
                <button
                    className="ran-btn"
                    onClick={(event) => this.handleOnClick(event)}>
                    Get Random Customer
                </button>
                {!start && <>
                    <div className="ran-content">
                        <div>Customer History </div>
                        {this.state.history_item_id.map((id, index) => {
                            if (index > 8) return (<></>)
                            let folder = id.substring(0, 3)
                            let src = `/images/${folder}/${id}.jpg`
                            return (
                                <img key={id} src={src} alt="jpg" ></img>
                            )
                        })}
                    </div>
                </>}

            </div >
        )
    }
}

export default RandomItem;