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
## editor 打包版本
Windows 版本打包完成(v3.5.0)
下载地址：http://ftp.cocos.org/TestBuilds/Editor-3d/3.5.0/CocosCreator-v3.5.0-win32-011120.zip
Mac 版本打包完成(v3.5.0)
下载地址：http://ftp.cocos.org/TestBuilds/Editor-3d/3.5.0/CocosCreator-v3.5.0-darwin-011120.zip

## editor-extension 分支
https://github.com/PPpro/creator-runtime-extensions/tree/35-open-harmony
拉取下来后，切到 35-open-harmony 分支，执行 `npm install` `npm run build`

## engine 仓库 35-open-harmony 分支
https://github.com/pppro/engine/tree/35-open-harmony

## engine-native 仓库 openharmony_v3.5.0_qgh 分支
https://github.com/qiuguohua/engine-native/tree/openharmony_v3.5.0_qgh

# 编辑器内设置
- 偏好设置里，设置内置 engine 和 engine-native 路径为上面两个引擎仓库
- 偏好设置里，设置好 鸿蒙 SDK 路径，NDK 暂时和 SDK 相同就好了，不然构建会报错
- 菜单栏 -> 扩展 -> 扩展管理器 -> 开发者选项卡 -> 右上角 + 号导入扩展包 -> 导入这个路径文件夹 https://github.com/PPpro/creator-runtime-extensions/tree/35-open-harmony/platforms/open-harmonyos
- 构建面板上应该就可以看到 Open Harmony 的构建入口了（第二步导入扩展包，好像每次打开编辑器都要导入一次。。。）

# JS PAL 接入方式
- 目前是通过实现一个 oh 全局对象，将 open harmony 的 js 接口注入到这里，注入的地方在 systemReady 阶段的实现里
https://github.com/qiuguohua/engine-native/blob/openharmony_v3.5.0_qgh/templates/open-harmony/entry/src/main/ets/default/workers/jsb-adapter/sys-ability-polyfill.js

- 补齐 oh 的能力之后，就可以在 engine PAL 层实现相关接口了，需要先在 cc.config.json 里定义好实现的文件路径  
cc.config.json 文件位置 https://github.com/PPpro/engine/blob/35-open-harmony/cc.config.json
参考路径配置 `pal/audio/open-harmony/player.ts`

- 具体实现在 PAL 这里，参考 audio player 的实现 https://github.com/PPpro/engine/blob/35-open-harmony/pal/audio/open-harmony/player.ts

- 编辑器里构建 Open Harmony 平台之后，相关实现会被打包到 cc.js 文件里

**注意**：适配相应的模块，记得在项目偏好设置里开启对应模块，否则模块会被剔除掉，就不会打包到 cc.js 了