import React, {useEffect} from 'react';
import logo from './logo.png';
import './App.css';
import {SketchHandler, StyleSheet, Sketch} from '@sketchjs/react'


const style = StyleSheet.create({
    root: {
        width: 1000,
        height: 500,
    },
    listWrap: {
        width: 300,
        height: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listItem: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    },
    imageWrap: {
        width: 300,
        height: 50,
        backgroundColor: 'pink',
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        color: '#ffffff',
        width: 1000,
        lineHeight: 40,
        fontSize: 40,
        fontWeight: 700
    }
})

function App() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const sketchRef = React.useRef<SketchHandler>(null)


    useEffect(() => {
        setTimeout(() => {
            const canvas = canvasRef.current
            const ctx = canvas?.getContext('2d')
            if (!canvas || !ctx) return
            sketchRef.current?.init(canvas, ctx)
            setTimeout(() => {
                sketchRef.current?.setSize(1000, 500)
                sketchRef.current?.render()?.then(() => console.log('rendered'))
                console.log(sketchRef.current)
            }, 1000)
        }, 1000)
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <canvas ref={canvasRef} style={{border: 'solid 1px green', height: 500, width: 1000}}/>

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Sketch.Root ref={sketchRef}>
                <Sketch.View style={style.root}>
                    <Sketch.Text text="Hello  World!" style={style.text}/>
                    <Sketch.View style={style.listWrap}>
                        {new Array(5).fill(0).map((_, index) => (
                            <Sketch.View style={style.listItem}/>
                        ))}
                    </Sketch.View>
                    <Sketch.View style={style.imageWrap}>
                        <Sketch.Image src={logo} style={style.image}/>
                    </Sketch.View>
                </Sketch.View>
            </Sketch.Root>
        </div>
    );
}

export default App;
