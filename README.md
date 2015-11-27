	$ npm install
---

# [code-splitting](http://webpack.github.io/docs/code-splitting.html)

## `require.ensure` CommonJs


	require.ensure(dependencies, callback);

Example:

	require.ensure(['module-a', 'module-b'], function (require) {
		var a = require('module-a');
		// ...
	});

Note: `require.ensure` only loads the modules synchronously, it doesn't evaluate them.

## `require` AMD

	require(dependencies, callback)

Example:

	require(['module-a', 'module-b'], function (a, b) {
		// a, b has been loaded and evaluated.
	});

Note: `require` loads and evaluate the modules asynchronous.


## `plugins` 分离打包js文件

	new webpack.optimize.CommonsChunkPlugin(/* chunkName= */, /* filename= */);

## `module.loaders` 解释规则


## `resolve` 省略文件扩展名

## `ExtractTextPlugin` 合并 `require` 到的样式

@2015/11/27 by kevin
