<template>
  <View @click="handleToDataURL">
    <Sketch.Root :style="style.root" :sketch="sketch" @ready="handleSketchInitialized" @update="handleSketchUpdate">
      <Sketch.View :style="style.view">
        <Sketch.Image src="@/assets/logo.svg" :style="style.logo"/>
        <Sketch.Text text="Hello  World!" :style="style.text"/>
      </Sketch.View>
    </Sketch.Root>
  </View>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { View } from '@tarojs/components'
import { StyleSheet, Sketch } from '@sketchjs/vue'
import './index.less'

defineComponent({ name: 'IndexPage' })

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
