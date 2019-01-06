import * as tsx from 'vue-tsx-support';
import prop from 'vue-strict-prop';
import { VNode } from 'vue';

import logo from '@/assets/logo.png';
import * as styles from './HelloWorld.module.scss';

const HelloWorld = tsx.componentFactory.create({
  props: {
    msg: prop(String).required,
  },

  render(): VNode {
    return (
      <div class={styles.component}>
        <img src={logo} class={styles.img} />
        <h1 class={styles.heading}>
          {this.msg}
        </h1>
      </div>
    );
  },
});

export default HelloWorld;
