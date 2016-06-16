import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


class RandomAdds extends React.Component {
  constructor() {
    super()
    this.state = {
      miles: 3,
      spots: 0,
    };
  }

  _handleMiles(event, value) {
    this.setState({
      miles: value
    })
  }

  _handleSpots(event, value) {
    this.setState({
      spots: value
    })
  }

  render() {
    return (
      <div className="c1">
        <Card>
          <CardHeader
            title="Random Additions"
            subtitle="Add random additions to your list!"
          />
          <CardText className="cardText">Randomly add {this.state.spots} spot(s) to my list
            <Slider 
              min={0}
              max={15}
              value={this.state.spots}
              step={1}
              onChange={this._handleSpots.bind(this)}
            />
          </CardText>
          <CardText className="cardText">Within a {this.state.miles} mile radius
            <Slider 
              min={0}
              max={9}
              value={this.state.miles}
              step={3}
              onChange={this._handleMiles.bind(this)}
            />
          </CardText>
          <RaisedButton
            className="submit"
            secondary={true}
            label="Add Spots"
          />
        </Card>
      </div>
    )
  };
}

module.exports = RandomAdds;