import React from 'react';
import {ACTIONS} from '../../store/config';
import {store} from '../../store/config';

const action = (type: string) => {
    store.dispatch({type});
};

interface Props {
    count: number;
}

class RootApp extends React.Component<Props> {
    public render() {
        return (
            <div>
                <div>Число: {this.props.count}</div>
                <button onClick={() => action(ACTIONS.INCREASE)}>+</button>
                <button onClick={() => action(ACTIONS.DECREASE)}>-</button>
                <button onClick={() => action(ACTIONS.ASYNC_INCREASE)}>async</button>
            </div>
        );
    }
}

export default RootApp;
