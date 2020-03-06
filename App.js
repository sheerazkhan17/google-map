import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView, { Marker } from 'react-native-maps';
import { Dropdown } from 'react-native-material-dropdown';
// var country = require('countryjs');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryData: [{
        value: 'Pakistan',
      },
      {
        value: 'US',
      }],

      //CountriesValuesState
      pakValue: {
        name: 'Pakistan',
        longitude: 67.001137,
        latitude: 24.860735,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },

      usValue: {
        name: 'US',
        longitude: -95.712891,
        latitude: 37.090240,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },

      city: [{
        value: 'Karachi',
      },

      {
        value: 'Sukkur',
      },

      {
        value: 'Bahawalpur',
      },

      {
        value: 'lahore',
      },
      {
        value: 'Rawalpindi',
      }],


      //AreasValues

      khiAreas: [{
        value: 'Malir',
      },

      {
        value: 'Steel Town',
      }
      ],

      //AreasLatLongValues
      malirValue: {
        name: 'Malir',
        latitude: 24.930799,
        longitude: 67.198929,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },

      stlValue: {
        name: 'Steel Town',
        latitude: 24.860195,
        longitude: 67.336364,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },

      region: {
        name: 'Pakistan',
        latitude: 24.8607,
        longitude: 67.0011,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },
    }
  }

  onChangeText = (value) => {
    console.log('countryvalue>>>', value)
    if (value === 'Pakistan') {
      this.setState({
        region: this.state.pakValue,
      })
    }
    else if (value === 'US') {
      this.setState({
        region: this.state.usValue,
      })
    }
    console.log('Regionvalue', this.state.region)
  }

  onChangeArea = (value) => {
    console.log('areavalue>>>', value)
    if (value === 'Malir') {
      this.setState({
        region: this.state.malirValue,
      })
    }
    else if (value === 'Steel Town') {
      this.setState({
        region: this.state.stlValue,
      })
    }

  }



  onRegionChange = (region) => {
    this.setState({ region });
    //console.log("regionValues", region)
  }

  render() {

    const { countryData, city, khiAreas } = this.state;
    //console.log('Regionvalue', this.state.region)

    return (
      <View style={styles.container2}>
        <ScrollView style={{ flex: 1, paddingBottom: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View styles={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>Package Details</Text>
            </View>

            <View style={styles.search}>
              <Dropdown
                label='Country'
                data={countryData}
                onChangeText={this.onChangeText}
              />
            </View>

            <View style={styles.search}>
              <Dropdown
                label='City'
                data={city}
              />
            </View>

            <View style={styles.search}>
              <Dropdown
                label='Select Area'
                data={khiAreas}
                onChangeText={this.onChangeArea}
              />
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View style={styles.sectionContainer}>
              <MapView
                style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
              >

                <Marker
                  draggable
                  coordinate={{
                    latitude: this.state.region.latitude, longitude: this.state.region.longitude
                  }}
                  title={this.state.region.name}
                  description={this.state.region.name}
                  onDragEnd={(e) => console.log('region coordinates', { x: e.nativeEvent.coordinate })}
                />
              </MapView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '70%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  map: {
    height: '100%'
  },

  container: {
    flex: 1,
    marginHorizontal: 10,

  },
  container2: {
    flex: 1,
    paddingHorizontal: 5,
    paddingBottom: 5

  },

  heading: {
    height: 30,
    paddingHorizontal: 5,

    //backgroundColor:'red'
  },
  headingText: {
    color: '#555555',
    fontFamily: "MontserratExtraBold",
    fontSize: 20,
    marginBottom: 10,

  },

  search: {
    marginHorizontal: 5,
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // map: {
  //     ...StyleSheet.absoluteFillObject,
  // },
});

export default App;
