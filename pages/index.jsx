import { Scroller, Section } from 'react-fully-scrolled';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="scroller-container">
      <NavBar/>
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {}}
        onAfterScroll={(page) => {}}
        isEnabled={true}>
        <Section className="section">
          <h1>Page 1</h1>
          <p>Content for page 1</p>
        </Section>

        <Section className="section1">
          <h1>Page 2</h1>
          <p>Content for page 2</p>
        </Section>

        <Section className="section">
          <h1>Page 3</h1>
          <p>Content for page 3</p>
        </Section>
        <Footer/>
      </Scroller>

      <style jsx>{`
        NavBar{
        }
        .scroller-container {
          height: 100vh;
          overflow: scroll;
          background-color: #00ff00;    
        }

        .section {
          height: 100vh;
          width: 100vh;
          background-color: #00ff00;  
        }
      `}</style>
    </div>
  );
}