import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import decorateMapComponent, {
  SUPPORTED,
  NOT_SUPPORTED,
} from './decorateMapComponent';

const propTypes = {
  onPress: PropTypes.func,
};

const defaultProps = {};

class MapCalloutSubview extends React.Component {
  render() {
    const AIRMapCalloutSubview = this.getAirComponent();
    return (
      <AIRMapCalloutSubview
        {...this.props}
        style={[styles.calloutSubview, this.props.style]}
      />
    );
  }
}

MapCalloutSubview.propTypes = propTypes;
MapCalloutSubview.defaultProps = defaultProps;

const styles = StyleSheet.create({
  calloutSubview: {},
});

export default decorateMapComponent(MapCalloutSubview, {
  componentType: 'CalloutSubview',
  providers: {
    google: {
      ios: SUPPORTED,
      android: NOT_SUPPORTED,
    },
  },
});
