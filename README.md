# 简介
Cocos Creator 工程，使用 v3.5.0 正在开发的版本，用以构建输出 OpenHarmony 平台

# 模块剔除
目前有很多模块还没接起来，如果需要接入对应模块，请在项目偏好设置里，把对应模块勾起来，再构建项目，输出 cc.js

# 已知问题
- 构建时不要勾选 Md5Cache
- 构建后已知的几个文件需要手动修改引用路径
    - local.properties
    - gradle.properties
    - build.gradle
- 文件接口还没接起来，settings.json 目前使用硬编码的 settings.js
- application.js、game.ts 也不是使用的构建模板，而是直接拷贝现成的

# 开发分支
editor 仓库
https://github.com/PPpro/editor-3d/tree/35-open-harmony

engine 仓库
https://github.com/pppro/engine/tree/35-open-harmony

engine-native 仓库
https://github.com/qiuguohua/engine-native/tree/openharmony_v3.5.0_qgh

分支拉取后，editor 目录下执行 `npm install`，需要更新 build-engine 的版本依赖

# JS PAL 接入方式
- 目前是通过实现一个 oh 全局对象，将 open harmony 的 js 接口注入到这里，注入的地方在 systemReady 阶段的实现里
https://github.com/qiuguohua/engine-native/blob/openharmony_v3.5.0_qgh/templates/open-harmony/entry/src/main/ets/default/workers/jsb-adapter/sys-ability-polyfill.js

- 补齐 oh 的能力之后，就可以在 engine PAL 层实现相关接口了，需要先在 cc.config.json 里定义好实现的文件路径  
cc.config.json 文件位置 https://github.com/PPpro/engine/blob/35-open-harmony/cc.config.json
参考路径配置 `pal/audio/open-harmony/player.ts`

- 具体实现在 PAL 这里，参考 audio player 的实现 https://github.com/PPpro/engine/blob/35-open-harmony/pal/audio/open-harmony/player.ts

- 编辑器里构建 Open Harmony 平台之后，相关实现会被打包到 cc.js 文件里