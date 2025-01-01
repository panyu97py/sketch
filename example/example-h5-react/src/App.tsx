import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {SketchImage, SketchRoot, SketchText, SketchView, StyleSheet} from '@sketchjs/runtime'
import {useToRef} from "./hooks";

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
        width: 160,
        lineHeight:40,
        fontSize:40,
        fontWeight: 700
    }
})

function App() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const isDrawing = React.useRef(false)

    const draw = useToRef(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx || isDrawing.current) return
        isDrawing.current = true
        const root = new SketchRoot(canvas, ctx)
        root.setSize(1000, 500)
        const rootView = new SketchView(style.root)
        const listWrap = new SketchView(style.listWrap)
        listWrap.displayName = 'listWrap'
        for (let i = 0; i < 5; i++) {
            const child = new SketchView(style.listItem)
            listWrap.appendChild(child)
        }

        const imageWrap = new SketchView(style.imageWrap)
        imageWrap.displayName = 'imageWrap'
        const image = new SketchImage(logo, style.image)
        const text = new SketchText('Hello  World', style.text)
        imageWrap.appendChild(image)
        rootView.appendChild(text)
        rootView.appendChild(listWrap)
        rootView.appendChild(imageWrap)
        root.appendChild(rootView)
        root.render().then(() => console.log('rendered', {root}))
    })

    useEffect(() => {
        draw.current()
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <canvas ref={canvasRef} style={{border: 'solid 1px green',height:500,width:1000}}/>
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
        </div>
    );
}

export default App;
