<template>
  <div class="App" @click="handleToDataURL">
    <canvas class="sketch-canvas" ref="canvas"/>
    <Sketch.Root :style="style.root" :sketch="sketch" @ready="handleSketchInitialized" @update="handleSketchUpdate">
      <Sketch.View :style="style.view">
        <Sketch.Image src="@/assets/logo.svg" :style="style.logo"/>
        <Sketch.Text text="Hello  World!" :style="style.text"/>
      </Sketch.View>
    </Sketch.Root>
  </div>
</template>

<script setup lang="ts">

import { StyleSheet, Sketch } from '@sketchjs/vue'

Sketch.debug = true

const style = StyleSheet.create({
root: {
  width: 500,
  height: 500,
  backgroundColor: '#282c34'
},
view: {
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

const sketch = Sketch.useSketch()

const handleToDataURL = () => {
  const dataUrl = sketch.value.toDataURL('image/png', 1)
  console.log({ dataUrl })
}

const handleSketchUpdate = () => {
  console.log('sketch update')
}

const handleSketchInitialized = () => {
  console.log('sketch initialized')
}
</script>

<style scoped>
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
