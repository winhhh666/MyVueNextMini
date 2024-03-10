import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
// 默认导出一个数组, 数组的每一个对象都是一个单独的导出文件配置, 详细文件配置信息查看
// https://www.rollupjs.com/guide/big-list-of-options
// 也就是说在这些对象中写配置信息
export default[{
  // 入口文件
  input: 'packages/vue/src/index.js',
  // 打包出口
  output: [
    // 导出life模式的包
    // life模式, 一个自动执行的功能, 适合作为script标签
    // 此模式详细查看上面的连接
    {
      // 开启sourceMap
      sourcemap: true,
      // 导出地址
      file: './packages/vue/dist/vue.js',
      // 生成包的格式
      format: 'life',
      // 变量名
      name: 'Vue'
    }], 

    // 插件
    plugins: [
      // ts
      typescript({
        sourcemap: true
      }),
      // 将模块导入的路径补全
      resolve(),
      // 转commonjs为 ESM
      commonjs()
    ]
  

}]
