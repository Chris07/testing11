const Webpack = require('webpack');
const Join = require('path').join;

const publicPath ='http://127.0.0.1:3000/static/';
const hotMiddlewareScript ='webpack-hot-middleware/client?reload=true';

const scriptPath ='javascripts/';

var entry =null;
if(process.env.NODE_ENV ==='dev'){
    entry ={
        index :['./index.js',hotMiddlewareScript],
        md    :['./md.js',hotMiddlewareScript],
    };
}else{
    entry ={
        index :'./index.js',
        md    :'./md.js',
    };
}

module.exports ={
    entry,
    context :Join(__dirname ,'/src'),
    output :{
        path :Join(__dirname ,'static/') ,
        filename :scriptPath+'[name].js',
        publicPath :publicPath
    },
    devtool :'source-map' ,
    module :{
        rules :[{
            test :/\.(png|jpg|gif)$/i ,
            use :{
                loader :'url-loader',
                options:{
                    limit:4096,
                    context:'context',
                    name:'images/[name].[ext]',
                }
            }
        },{
            test:/\.css$/,
            use :['style-loader','css-loader'],
        },{
            test :/\.scss$/i ,
            use  :['style-loader','css-loader','sass-loader'],
        },{
            test :/\.js$/i ,
            use  :{
                loader  :'babel-loader',
                options :{presets :['es2015','stage-2']}
            },
        }]
    },
    resolve :{
        alias :{
            'public' :Join(__dirname ,'../../public'),
            'src'    :Join(__dirname ,'src'),
        }
    } ,
    plugins :[
        new Webpack.NoEmitOnErrorsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name      :"commons",
            filename  :scriptPath+'commons.js',
            minChunks :2,
        }),
    ]
};
