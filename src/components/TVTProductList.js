import React, { Component } from 'react'

export default class TVTProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            status: 0
        }

    }
    TVTHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submid form
    TVTHandleSubmit = (ev) => {
        console.log("Form2", this.state);
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
    render() {
        return (
            <div>
                <h2>them moi san pham</h2>
                <form className='col-md-6'>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Id
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='id'
                            value={this.state.id}
                            onChange={this.TVTHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="t">
                            Title
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='title'
                            value={this.state.title}
                            onChange={this.TVTHandleChange}

                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="title">
                            State
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='state'
                            value={this.state.status}
                            onChange={this.TVTHandleChange}

                        />
                    </div>
                    <button className='btn btn-success' onClick={this.TVTHandleSubmit}>ghi lai</button>

                </form>
            </div>
        )
    }
}