import { Scroller, Section } from 'react-fully-scrolled';

export default function Home() {
  return (
    <div className="scroller-container">
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {}}
        onAfterScroll={(page) => {}}
        isEnabled={true}>

        <Section className="section">
          <h1>Page 1</h1>
          <p>Content for page 1</p>
        </Section>

        <Section className="section">
          <h1>Page 2</h1>
          <p>Content for page 2</p>
        </Section>

        <Section className="section">
          <h1>Page 3</h1>
          <p>Content for page 3</p>
        </Section>

      </Scroller>

      <style jsx>{`
        .scroller-container {
          height: 100vh;
          overflow: hidden;
        }

        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f8f8;
          font-size: 2rem;
          text-align: center;
        }

        .section h1 {
          margin-bottom: 1rem;
        }

        .section p {
          max-width: 50%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}