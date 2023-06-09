import {useState, useEffect} from 'react';



const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);

    return (
      <WrappedComponent {...props} mousePosition={mousePosition}/>
    )
  }
}

const MouseTracker = (props) => {
  return (
    <>
    <p>X: {props.mousePosition.x}, Y: {props.mousePosition.y}</p>
    </>
  )
}

const BetterMouse = withMousePosition(MouseTracker); 

function App() {
  return (
    <div className="App">
      <BetterMouse />
    </div>
  );
}

export default App;
