import React, { Component } from 'react';
import slugify from 'slugify';
import Features from './Features';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeaturesList extends React.Component { 

    render () {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return <Features featureHash={featureHash} currentFeature={feature} features={this.props.features} updateFeature={this.props.updateFeature} selected={this.props.selected} />
          });


        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
        )
    }
}

export default FeaturesList;