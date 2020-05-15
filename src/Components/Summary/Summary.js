import React from 'react';
import CartEntry from './CartEntry/CartEntry';
import Total from './Total/Total';

class Summary extends React.Component { 

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return <CartEntry key={featureHash} selectedOption={selectedOption} currentFeature={feature} />
          });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total total={this.props.total}/>
            </section>
        )
    }
}

export default Summary;