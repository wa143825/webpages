const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.dev')

let app = express()

let compiler = webpack(webpackConfig)

let devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath: webpackConfig.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
})

app.use(devMiddleware)

app.get('/:viewname?',function(req,res,next){
    var viewname = req.params.viewname?req.params.viewname+'.html':'index.html';
    var filepath = path.join(compiler.outputPath,viewname)

    compiler.outputFileSystem.readFile(filepath,function(err,result){
        if(err){
            return next(err)
        }
        res.set('content-type','test/html')
        res.send(result)
        res.end()
    })
})

module.exports = app.listen(9999,function(err){
    if(err){
        return;
    }
})