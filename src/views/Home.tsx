import { componentFactory } from 'vue-tsx-support';
import { VNode } from 'vue';
import HelloWorld from '../components/HelloWorld';

const Home = componentFactory.create({
  render(): VNode {
    return (
      <div class="Home" key="Home">
        <HelloWorld msg="Declarative Vue with JSX & Typescript" />
      </div>
    );
  },
});

export default Home;
