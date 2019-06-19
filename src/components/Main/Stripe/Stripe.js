import React, { Component } from 'react';
import styles from './Stripe.module.css';

class Stripe extends Component {
    state = { position: 0 }
    stripeRef = React.createRef();

    componentDidMount() {
        this.setState({position: this.stripeRef.current.offsetTop})
    }

    render () {
        let style = [styles.Stripe]
        if (this.state.position - this.props.pageOffset <= 300 && this.state.position > 300) {
            style.push(styles.Fixed);
        } else {
            style.push(styles.Absolute);
        }
        return <div ref={this.stripeRef} className={style.join(' ')}><p>{this.state.position}</p><p>{this.props.pageOffset}</p></div>
    }
}

export default Stripe;