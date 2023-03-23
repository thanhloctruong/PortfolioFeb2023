
import React from "react";
import styles from './Layout.module.scss'
import { Container } from "react-bootstrap";
import Footer from "../footer/footer";
import NavHeader from "@/components/navbar/nav";


function Layout({ children }: React.PropsWithChildren) {
      return (
        <>
      <NavHeader />
    <main >
              <Container className={styles.wrap}>
        {children}
      </Container>
                  </main>
              <Footer/>
                  
        </>
  );
}

export default Layout;
