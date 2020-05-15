import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Features extends React.Component { 
    render() {
            const options = this.props.features[this.props.currentFeature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.currentFeature)}
                    checked={item.name === this.props.selected[this.props.currentFeature].name}
                    onChange={e => this.props.updateFeature(this.props.currentFeature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
              <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                  <h3>{this.props.currentFeature}</h3>
                </legend>
                {options}
              </fieldset>
            );
    }
}

export default Features;