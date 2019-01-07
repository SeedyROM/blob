import { componentFactory } from 'vue-tsx-support';
import { VNode } from 'vue';

const About = componentFactory.create({
  name: 'About',
  render(): VNode {
    return (
      <div class="About" key="About">
        <h1>About</h1>
        <hr />
        <p>
          This is a boilerplate template for using JSX and Vue in harmony
        </p>
      </div>
    );
  },
});

export default About;
