import { useRef } from 'react';
import moon from './moon.png';
import couple from './couple.jpg';
import land from './3857.jpg';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${couple})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2> Hế lô pé iu </h2>
          <h2>Lướt xún mín đuy ദ്ദി(ˉ͈̀꒳ˉ͈́ )✧</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>⸜(｡˃ ᵕ ˂ )⸝♡</h2>
          <h2>Pé iu tha lõi choa anh nha</h2> 
          <h2>Anh bít lõi òi</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
