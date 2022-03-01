import React, {Component} from 'react'

export default function WithLogging(WrappedComponent) {
    class WithLogging extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent} is going to unmount`);
        }
        render() {
            return <WrappedComponent />
        }
    }
    WithLogging.displayName = `WithLogging(${handleDisplayName(WrappedComponent)})`;
    return WithLogging
}

function handleDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || 'Component';
}