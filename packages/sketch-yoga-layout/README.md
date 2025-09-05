# sketch-yoga-layout
> 基于 [`yoga-layout`](https://www.yogalayout.dev/) 编译产物修改而来，用于在 Sketch 插件中使用。
> header: 123276157121f8d87d1245f94cf5f87edeeb18b6
> 文件`CMakeLists.txt` 基于 `yoga-layout` 编译配置修改而来，用于编译`binaries`目录下文件，在 Sketch 插件中使用。
## 编译说明
1. 复制 `sketch-yoga-layout/CMakeLists.txt` 文件至 `yoga-layout/javascript/CMakeLists.txt`
2. 执行 `javascript/package.json` 中 `build` 命令
3. 替换 `packages/sketch-yoga-layout/binaries` 中的文件自 `javascript/binaries`
