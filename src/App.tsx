import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Shape as Example } from './example';

const App = () => {
    return (
      <FluentProvider theme={webLightTheme}>
        <Example />
      </FluentProvider>
    );
};

export default App;