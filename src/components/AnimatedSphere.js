import React from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';


export default function AnimatedSphere() {
    return <Sphere visible args={[1, 100, 200]} scale={2.5}>
        {/* set distort to high like 2 or 3 for larger change */}
        {/* <MeshDistortMaterial distort={2} speed={0.09} /> */}
        <MeshDistortMaterial color="#8352fd" distort={0.3} speed={1.5}/>

    </Sphere>
}