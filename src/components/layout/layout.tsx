
import React from "react";
import styles from './Layout.module.scss'
import { Container } from "react-bootstrap";

import NavHeader from "@/components/navbar/nav";
import Footer from "../footer/Footer";


function Layout({ children }: React.PropsWithChildren) {
      return (
        <>
      <NavHeader />
    <main className={styles.main_bg}>
              <Container className={styles.wrap}>
        {children}
      </Container>
                  </main>
              <Footer/>
                  
        </>
  );
}

export default Layout;
