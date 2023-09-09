import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const App = () => (
              <div style={{ 
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center"
              }}>
                <Gallery >
                  <Item
                  original="https://placekitten.com/1024/768?image=1"
                  thumbnail="https://placekitten.com/80/60?image=1"
                  width="1024"
                  height="768"
                  >
                    {({ ref, open }) => (
                    <img ref={ref} alt='--' onClick={open} src="https://placekitten.com/80/60?image=1" />
                    )}
                  </Item>
                  <Item
                  original="https://placekitten.com/1024/768?image=2"
                  thumbnail="https://placekitten.com/80/60?image=2"
                  width="1024"
                  height="768"
                  >
                    {({ ref, open }) => (
                    <img ref={ref} alt='--' onClick={open} src="https://placekitten.com/80/60?image=2" />
                    )}
                  </Item>
                  <Item
                  original="https://placekitten.com/1024/768?image=18"
                  thumbnail="https://placekitten.com/80/60?image=18"
                  width="1024"
                  height="768"
                  >
                    {({ ref, open }) => (
                    <img ref={ref} alt='--' onClick={open} src="https://placekitten.com/80/60?image=18" />
                    )}
                  </Item>
                </Gallery>
              </div>
)

export default App