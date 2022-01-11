/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createServer } from 'miragejs';

import configStore from './src/store/configStore';
import RootStackNavigator from './src/navigators/RootStackNavigator';

import ThemeProvider from './src/contexts/ThemeProvider';

const store = configStore();

import { View, Text } from 'react-native';

if (window.server) {
  console.log(`window.server: ${window.server}`);
  console.log(`server: ${window.server}`);
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/movies', () => {
      return {
        movies: [
          { id: 1, name: 'Inception', year: 2010 },
          { id: 2, name: 'Interstellar', year: 2014 },
          { id: 3, name: 'Dunkirk', year: 2017 },
        ],
      };
    });
  },
});

const App: () => Node = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((json) => setMovies(json.movies));
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View>
          {movies.map((movie) => (
            <Text key={movie.id}>
              {movie.name} ({movie.year})
            </Text>
          ))}
        </View>
        {/* <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider> */}
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
