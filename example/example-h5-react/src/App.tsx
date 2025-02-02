import React, {useEffect} from 'react';
import {SketchHandler, StyleSheet, Sketch} from '@sketchjs/react'
import logo from './logo.png';
import './App.css';

const style = StyleSheet.create({
    root: {
        width: 500,
        height: 500,
    },
    rootView: {
        width: 500,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    text: {
        width: 500,
        marginTop: 20,
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 400,
        lineHeight: 50,
        textAlign: 'center'
    }
})

function App() {

    const sketchRef = React.useRef<SketchHandler>(null)

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const handleSketchReady = () => {
        console.log('sketch ready')
        sketchRef.current?.render()?.then(() => console.log('rendered'))
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return
        sketchRef.current?.init(canvas, ctx)
    }, []);

    return (
        <div className="App">
            <canvas className="sketch-canvas" ref={canvasRef}/>
            <Sketch.Root style={style.root} ref={sketchRef}  onSketchReady={handleSketchReady}>
                <Sketch.View style={style.rootView}>
                    <Sketch.Image src={logo} style={style.logo}/>
                    <Sketch.Text text="Hello  World!" style={style.text}/>
                </Sketch.View>
            </Sketch.Root>
        </div>
    );
}

export default App;
