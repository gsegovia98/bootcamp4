import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {

  remove(id) {
    this.props.removeBuilding(id)
  }

  render() {
    const currentBuild = this.props.data.find(building => {
      return building.id == this.props.selectedUpdate.id
    });

    if (currentBuild) {
      return (
        <div>
          <p>
            <strong> Name: </strong>{currentBuild.name}<br />
            <strong>Address: </strong>{currentBuild.address}<br />
            {currentBuild.coordinates &&<p> <strong>Coordinates: </strong>{' ' + currentBuild.coordinates.latitude},{' ' + currentBuild.coordinates.longitude}
          </p>}
            <RemoveBuilding targetBuilding={currentBuild}
              removeBuilding={this.remove.bind(this)}/>
          </p>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>Click building for info</p>
        </div>
      )
    }
  }
}
export default ViewBuilding;