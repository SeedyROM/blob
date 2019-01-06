import { componentFactory } from 'vue-tsx-support';
import { VNode } from 'vue';

const About = componentFactory.create({
  functional: true,

  render(): VNode {
    return (
      <div class="About" key="About">
        <h1>ABOUT US</h1>
      </div>
    );
  },
});

export default About;
