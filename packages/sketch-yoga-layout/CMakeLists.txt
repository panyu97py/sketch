cmake_minimum_required(VERSION 3.13...3.26)
set(CMAKE_VERBOSE_MAKEFILE on)
project(yoga)

# 获取源文件
file(GLOB SOURCES CONFIGURE_DEPENDS
    ${CMAKE_CURRENT_SOURCE_DIR}/../yoga/*.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/../yoga/**/*.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp)

include_directories(..)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 20)

# 编译选项
add_compile_definitions(
    EMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0)

set(COMPILE_OPTIONS
    -flto
    -fno-exceptions
    -fno-rtti
    -g0
    -Os
    "SHELL:-s STRICT=1")

add_compile_options(${COMPILE_OPTIONS})

# 创建共享的编译选项
set(LINK_OPTIONS
    ${COMPILE_OPTIONS}
    "SHELL:--closure 1"
    "SHELL:--memory-init-file 0"
    "SHELL:--no-entry"
    "SHELL:-s ALLOW_MEMORY_GROWTH=1"
    "SHELL:-s ASSERTIONS=0"
    "SHELL:-s DYNAMIC_EXECUTION=0"
    "SHELL:-s EXPORT_NAME='loadYoga'"
    "SHELL:-s FETCH_SUPPORT_INDEXEDDB=0"
    "SHELL:-s FILESYSTEM=0"
    "SHELL:-s MALLOC='emmalloc'"
    "SHELL:-s MODULARIZE=1"
    "SHELL:-s EXPORT_ES6=1"
    "SHELL:-s TEXTDECODER=0"
    "SHELL:-s SINGLE_FILE=1"
    "SHELL:-s ENVIRONMENT='web'")

# 创建库文件
add_library(yogaObjLib OBJECT ${SOURCES})

# 设置输出目录
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/binaries)

# 构建目标：禁用 WebAssembly
add_executable(yoga-base64-esm $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-base64-esm PRIVATE ${LINK_OPTIONS} "SHELL:-s WASM=0")

# 构建目标：启用 WebAssembly
add_executable(yoga-wasm-base64-esm $<TARGET_OBJECTS:yogaObjLib>)
target_link_options(yoga-wasm-base64-esm PRIVATE ${LINK_OPTIONS} "SHELL:-s WASM=1")

# 确保链接 embind 库
target_link_libraries(yoga-wasm-base64-esm PRIVATE embind)
target_link_libraries(yoga-base64-esm PRIVATE embind)
