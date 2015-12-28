'use strict';

const fs = require('fs');
const path = require('path');
const app = require('koa')();
const router = require('koa-router')();

const dir = path.join(__dirname, 'people');

router.get('/api/write', function* (next) {
    var type = this.request.query.type;
    var name = this.request.query.name;
    var phone = this.request.query.phone;
    var content = this.request.query.content;

    var filepath = path.join(dir, `${type}-${name}-${Date.now()}.txt`);
    fs.writeFile(filepath, 
        `name:${name}\nphone:${phone}\ncontent:${content}`, 
        'utf8');

    yield next;

    this.status = 200;
    this.body = '\'ok\'';
});

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8181);
