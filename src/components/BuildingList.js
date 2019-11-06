import React from 'react';

class BuildingList extends React.Component {
  render() {
    const { data, filteredText, selectedUpdate } = this.props;
    const buildingList = data.filter(directory => {return directory.name.toUpperCase().indexOf(filteredText.toUpperCase()) >= 0}).map(directory => {
      return (
        <tr key={directory.id} onClick={() => selectedUpdate(directory)}>
          <td>{directory.code}</td>
          <td>{directory.name}</td>
        </tr>
      );
    });
    return <div>{buildingList}</div>;
  }
}
export default BuildingList;