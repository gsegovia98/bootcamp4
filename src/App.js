import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      currentBuilding: 0,
      show: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  selectedUpdate(id) {
    this.setState({
      currentBuilding: id
    })
  }
  removeBuilding(id) {
    const updatedList = this.state.show.filter(directory => {return directory.id !== id}).map(directory => { return directory });
  
    this.setState({show: updatedList})
  }

  addBuilding(newEntry) {
    newEntry.preventDefault();
    const id = this.state.show.slice(-1)[0].id + 1;
    const code = newEntry.target[0].value;
    const name = newEntry.target[1].value;
    const address = newEntry.target[2].value;
    const latitude = newEntry.target[3].value;
    const longitude = newEntry.target[4].value;

    var directory = {id: id, code: code, name: name,address: address, coordinates: {latitude: latitude,longitude: longitude}};

    const updatedList = this.state.show.map(dir => { return dir }).concat(directory);


    this.setState({
      show: updatedList
    })
  }

  render() {
    return (
        <div className="bg">
          <div className="row">
            <h1>UF Directory App</h1>
          </div>
          <Search
              filterUpdate={this.filterUpdate.bind(this)}
          />
          <main>
            <div className="row">
              <div className="column1">
                <div className="tableWrapper">
                    <tbody>
                    <tr>
                      <td>
                        <b>Building</b>
                      </td>
                    </tr>
                    <BuildingList
                        data={this.state.show}
                        filteredText={this.state.filterText}
                        selectedUpdate={this.selectedUpdate.bind(this)}
                    />
                    </tbody>
                </div>
              </div>
              <div className="column2">
                <ViewBuilding
                    data={this.state.show}
                    selectedUpdate={this.state.currentBuilding}
                />
              </div>
              <div className="column1">
                <AddBuilding addBuilding={this.addBuilding.bind(this)}/>
              </div>
            </div>
            <Credit />
          </main>
        </div>
    );
  }
}

export default App;