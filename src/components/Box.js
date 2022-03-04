import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from '../images/boxTexture3.jpg'


export default function Box(props) {
    const colorTexture = useLoader(TextureLoader, texture)

    return <mesh rotation={[90, 0, 15]}>
        <boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
        {
            props.isTexture ? <meshStandardMaterial map={colorTexture} /> : <meshNormalMaterial attach='material' />
        }
    </mesh>

}