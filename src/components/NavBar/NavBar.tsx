import { componentFactory } from 'vue-tsx-support';
import { VNode } from 'vue';

import styles from './NavBar.module.scss';

const NavBar = componentFactory.create({
  render(): VNode {
    return (
      <nav class={styles.NavBar}>
        <div class={styles.links}>
          <router-link to="/" exact-active-class={styles.activeLink}>Home</router-link>
          <router-link to="/about" exact-active-class={styles.activeLink}>About</router-link>
        </div>
      </nav>
    );
  },
});

export default NavBar;
