import * as tsx from 'vue-tsx-support';
import { VNode } from 'vue';
import HelloWorld from '@/components/HelloWorld';

const App = tsx.componentFactory.create({
  render(): VNode {
    return (
      <div class="App">
        <HelloWorld msg="Hello TSX world!" />
      </div>
    );
  },
});

export default App;
