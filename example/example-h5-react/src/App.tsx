import React, {useEffect} from 'react';
import {SketchHandler, StyleSheet, Sketch} from '@sketchjs/react'
import logo from './logo.png';
import './App.css';

const style = StyleSheet.create({
    root: {
        width: 500,
        height: 500,
        padding: 50
    },
    logoWrap: {
        width: 500,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200
    },
    textWrap: {
        width: 500,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        width: 500,
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 400,
        lineHeight: 100,
        textAlign: 'center'
    }
})

function App() {

    const sketchRef = React.useRef<SketchHandler>(null)

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const handleSketchReady = () => {
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
            <Sketch.Root ref={sketchRef} width={500} height={500} onSketchReady={handleSketchReady}>
                <Sketch.View style={style.root}>
                    <Sketch.View style={style.logoWrap}>
                        <Sketch.Image src={logo} style={style.logo}/>
                    </Sketch.View>
                    <Sketch.View style={style.logoWrap}>
                        <Sketch.Text text="Hello  World!" style={style.text}/>
                    </Sketch.View>
                </Sketch.View>
            </Sketch.Root>
        </div>
    );
}

export default App;
