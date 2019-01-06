import { componentFactory } from 'vue-tsx-support';
import { VNode } from 'vue';
import HelloWorld from '@/components/HelloWorld';
import NavBar from './components/NavBar/NavBar';

import * as styles from './App.module.scss';
import './styles/transitions.scss';

const App = componentFactory.create({
  render(): VNode {
    return (
      <div class={styles.App}>
        <NavBar />
        <div class={styles.content}>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    );
  },
});

export default App;
