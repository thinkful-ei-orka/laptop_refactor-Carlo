import React from 'react';
import slugify from 'slugify';
import Option from '../Option/Options';

class Feature extends React.Component { 
    render() {
            const options = this.props.features[this.props.currentFeature].map(item => {
              const itemHash = slugify(JSON.stringify(item));

              return <Option key={itemHash} itemHash={itemHash} currentFeature={this.props.currentFeature} features={this.props.features} updateFeature={this.props.updateFeature} selected={this.props.selected} item={item}/>
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

export default Feature;