
import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Calculator from './src/Calculator';
import { Header } from './src/components';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View syle={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'#7f8c8d'}
                    barStyle={'light-content'}
                    />
                <Header headerText="Calculator" />
                <Calculator />
            </View>
        </Provider>
    );
};

export default App;
