import React from 'react'

class RemoveBuilding extends React.Component {
    remove() {
        this.props.removeBuilding(this.props.targetBuilding.id)
    }
    render() {return(<button onClick={this.remove.bind(this)}>Remove Building</button>)}
}

export default RemoveBuilding;