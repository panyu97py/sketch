cmake_minimum_required(VERSION 3.13...3.26)
project(yoga)
set(CMAKE_VERBOSE_MAKEFILE on)

# 获取源文件
file(GLOB_RECURSE SOURCES CONFIGURE_DEPENDS
    ${CMAKE_CURRENT_SOURCE_DIR}/../yoga/*.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/..)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 20)

# 编译宏定义
add_compile_definitions(EMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0)

# 通用编译选项
set(COMPILE_OPTIONS
    -flto
    -fno-exceptions
    -fno-rtti
    -g0
    -Os
    "SHELL:-s STRICT=1")

add_compile_options(${COMPILE_OPTIONS})

# 通用链接选项基础（不含模块类型/ESM 与 WASM 区分）
set(LINK_OPTIONS_BASE
    ${COMPILE_OPTIONS}
    "SHELL:--closure 1"
    "SHELL:--memory-init-file 0"
    "SHELL:--no-entry"
    "SHELL:-s ALLOW_MEMORY_GROWTH=1"
    "SHELL:-s ASSERTIONS=0"
    "SHELL:-s DYNAMIC_EXECUTION=0"
    "SHELL:-s EXPORT_NAME='loadYoga'"
    "SHELL:-s FILESYSTEM=0"
    "SHELL:-s MALLOC='emmalloc'"
    "SHELL:-s MODULARIZE=1"
    "SHELL:-s TEXTDECODER=0"
    "SHELL:-s SINGLE_FILE=1")

# 创建对象库供所有目标复用
add_library(yogaObjLib OBJECT ${SOURCES})

# 输出目录
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/binaries)

# ========== ESM 构建 ==========
set(LINK_OPTIONS_ESM ${LINK_OPTIONS_BASE}
    "SHELL:-s EXPORT_ES6=0"
    "SHELL:-s ENVIRONMENT='web'")

# ESM no WASM
add_executable(yoga-base64-esm $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-base64-esm PRIVATE ${LINK_OPTIONS_ESM} "SHELL:-s WASM=0")
target_link_libraries(yoga-base64-esm PRIVATE embind)
add_custom_command(TARGET yoga-base64-esm POST_BUILD
    COMMAND npx babel $<TARGET_FILE:yoga-base64-esm> --presets=@babel/preset-env --out-file $<TARGET_FILE_DIR:yoga-base64-esm>/yoga-base64-esm-es5.js
    COMMENT "Transpile to ES5 using Babel")

# ESM with WASM
add_executable(yoga-wasm-base64-esm $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-wasm-base64-esm PRIVATE ${LINK_OPTIONS_ESM} "SHELL:-s WASM=1")
target_link_libraries(yoga-wasm-base64-esm PRIVATE embind)
add_custom_command(TARGET yoga-wasm-base64-esm POST_BUILD
    COMMAND npx babel $<TARGET_FILE:yoga-wasm-base64-esm> --presets=@babel/preset-env --out-file $<TARGET_FILE_DIR:yoga-wasm-base64-esm>/yoga-wasm-base64-esm-es5.js
    COMMENT "Transpile to ES5 using Babel")

# ========== CommonJS 构建 ==========
set(LINK_OPTIONS_CJS ${LINK_OPTIONS_BASE}
    "SHELL:-s EXPORT_ES6=0"
    "SHELL:-s ENVIRONMENT='node'")

# CJS no WASM
add_executable(yoga-base64-cjs $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-base64-cjs PRIVATE ${LINK_OPTIONS_CJS} "SHELL:-s WASM=0")
target_link_libraries(yoga-base64-cjs PRIVATE embind)
add_custom_command(TARGET yoga-base64-cjs POST_BUILD
    COMMAND npx babel $<TARGET_FILE:yoga-base64-cjs> --presets=@babel/preset-env --out-file $<TARGET_FILE_DIR:yoga-base64-esm>/yoga-base64-cjs-es5.js
    COMMENT "Transpile to ES5 using Babel")

# CJS with WASM
add_executable(yoga-wasm-base64-cjs $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-wasm-base64-cjs PRIVATE ${LINK_OPTIONS_CJS} "SHELL:-s WASM=1")
target_link_libraries(yoga-wasm-base64-cjs PRIVATE embind)
add_custom_command(TARGET yoga-wasm-base64-cjs POST_BUILD
    COMMAND npx babel $<TARGET_FILE:yoga-wasm-base64-cjs> --presets=@babel/preset-env --out-file $<TARGET_FILE_DIR:yoga-wasm-base64-esm>/yoga-wasm-base64-cjs-es5.js
    COMMENT "Transpile to ES5 using Babel")
