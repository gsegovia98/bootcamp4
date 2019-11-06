import React from 'react'

class AddBuilding extends React.Component {
    render() {
        return(
            <div>
                <b>Adding a  Building</b>
                <form onSubmit={this.props.addBuilding.bind(this)}>
                    <input type='text' name='Code' placeholder='Building Code'/>
                    <input type='text' name='Name' placeholder='Building Name'/><input type='text' name='Address' placeholder='Building Address'/><input type='text' name='Latitude' placeholder='Building Latitude'/><input type='text' name='Longitude' placeholder='Building Longitude'/>
                    <button type='submit'>Enter Building</button>
                </form>
            </div>

        )
    }
}

export default AddBuilding;