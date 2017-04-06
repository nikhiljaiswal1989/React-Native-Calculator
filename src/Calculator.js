import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import GridView from 'react-native-easy-grid-view';
import { connect } from 'react-redux';
import { displayChanged } from './actions';
import { DisplaySection, Button } from './components';

const ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithCells([7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '=', '(', ')', 'DEL'], 3);
const oprationSource = ds.cloneWithCells(['CLR', '/', '*', '-', '+'], 1);
const { height } = Dimensions.get('window');


class Calculator extends Component {
 
  render() {
    const { keyPadContainer, numberContainer, opratorContainer } = styles;
    return (
      <View style={{ height: height - 82 }}>
        <DisplaySection
          displayText={this.props.displaytext}
          displayresult={this.props.displayresult}/>
        <View style={keyPadContainer}>
          <View style={numberContainer}>
            <GridView
              dataSource={dataSource}
              renderCell={(cell) => <Button
                text={cell}
                height={60}
                onPress={() => this.props.displayChanged(cell) }
                />}
              />
          </View>
          <View style={opratorContainer}>
            <GridView
              dataSource={oprationSource}
              renderCell={(cell) => <Button
                text={cell}
                height={60}
                onPress={() => this.props.displayChanged(cell) }/>}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  keyPadContainer: {
    height: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  numberContainer: {
    flex: 3,
    backgroundColor: '#95a4a5',
  },
  opratorContainer: {
    flex: 1,
    backgroundColor: '#7f8c8d',
  }
};
const mapStateToProps = state => {
  return {
    displaytext: state.displayReducer.displaytext,
    displayresult: state.displayReducer.displayresult

  };
};
export default connect(mapStateToProps, { displayChanged })(Calculator);

