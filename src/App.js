import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import { Component, Suspense } from 'react';
import AnimatedSphere from './components/AnimatedSphere';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isTexture: true
    }
  }
  render() {
    return (
      <div className="App pt-3">
        <button className='btn btn-secondary' onClick={() => { this.setState({ isTexture: !this.state.isTexture }) }}>
          Toggle Texture
        </button>
        <Canvas className='box-canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback='' >
            <Box isTexture={this.state.isTexture} />
          </Suspense>
        </Canvas>

        <Canvas className='box-canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback='' >
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    );
  }
}

export default App;
