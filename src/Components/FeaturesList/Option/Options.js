import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Option extends React.Component { 

    render() {
        return (
            <div className="feature__item">
              <input
                type="radio"
                id={this.props.itemHash}
                className="feature__option"
                name={slugify(this.props.currentFeature)}
                checked={this.props.item.name === this.props.selected[this.props.currentFeature].name}
                onChange={e => this.props.updateFeature(this.props.currentFeature, this.props.item)}
              />
              <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
              </label>
            </div>
        )
    }

}

export default Option;