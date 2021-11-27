import { SwitchTransition, TransitionGroup, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Layout.module.css";

// const TIMEOUT = 2000;
const TIMEOUT = 250;
const gsapDuration = TIMEOUT / 1000;

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className={styles["layout-container"]}>
        <SwitchTransition>
          <Transition
            key={router.pathname}
            timeout={TIMEOUT}
            onEnter={(node) => {
              console.log("==========\nLAYOUT ON ENTER", router.pathname);
              gsap.set(node, { autoAlpha: 0 });
              gsap.to(node, { autoAlpha: 1, duration: gsapDuration * 3 });
            }}
            onExit={(node) => {
              console.log("**********\nLAYOUT ON EXIT!!!", router.pathname);
              gsap.to(node, { autoAlpha: 0, duration: gsapDuration });
            }}
          >
            {children}
          </Transition>
        </SwitchTransition>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
