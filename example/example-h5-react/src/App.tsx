import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {SketchRoot,SketchView,StyleSheet} from '@sketchjs/runtime'
import {useToRef} from "./hooks";

const style = StyleSheet.create({
    root:{
        width: 300,
        height: 150,
    },
    listWrap:{
        width: 300,
        height: 150,
        backgroundColor: 'red',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    listItem:{
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    }
})

function App() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const draw = useToRef(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return
        const root = new SketchRoot(canvas, ctx)
        const listWrap = new SketchView(style.listWrap)
        for (let i = 0; i < 5; i++) {
            const child = new SketchView(style.listItem)
            listWrap.appendChild(child)
        }
        root.appendChild(listWrap)
        root.render()
    })

    useEffect(() => {
        draw.current()
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <canvas ref={canvasRef}/>
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
