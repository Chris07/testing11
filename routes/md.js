"use strict";
var express = require('express');
var router = express.Router();

const Bluebird =require('bluebird');
const Fs =Bluebird.promisifyAll(require('fs'));
const Join =require('path').join;
const Marked =require('marked');


router.get('/:mdFile([\\w_]+)',async function(req, res, next) {
    var mdFilePath =Join(__dirname,'../src/md/',req.params.mdFile+'.md');
    console.log(mdFilePath);
    var hasMdFile =await Fs.existsSync(mdFilePath);
    if(!hasMdFile){
        res.status(404);
        res.render('404',{
            title:'未找到该文档',
            message:'你可能是被错误的链接导航与此，请将问题报告给626954412#qq.com',
        });
        return;
    };
    var mdFileContent =await Promise.all([
        Fs.readFileSync(mdFilePath),
        Fs.readFileSync(Join(__dirname,'../src/md/_other-link.md')),
    ]);
    mdFileContent =Buffer.concat(mdFileContent);
    res.render('md',{
        markdown:Marked(mdFileContent.toString()),
    });
});

module.exports = router;