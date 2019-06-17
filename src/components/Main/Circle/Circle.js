import React, { Component } from 'react';
import styles from './Circle.module.css';

class Circle extends Component {
    state = { position: 0 }
    circleRef = React.createRef();
    componentDidUpdate() {
        console.log(this.circleRef.current.offsetTop);
    }
    componentDidMount() {
        this.setState({position: this.circleRef.current.offsetTop})
    }
    render() {
        let style = [styles.Circle]
        if (this.state.position - this.props.pageOffset <= 200 && this.state.position > 200) {
            console.log('fixed');
            style.push(styles.Fixed);
        } else {
            style.push(styles.Absolute);
        }
        return <div ref={this.circleRef} className={style.join(' ')}><p>{this.state.position}</p><p>{this.props.pageOffset}</p></div>
    }
} 

export default Circle;