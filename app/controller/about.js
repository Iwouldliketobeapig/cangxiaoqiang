'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async findAll() {
    const { ctx } = this;
    const res = ctx.service.about.findAll();
    ctx.body = res;
  }

  async create() {
    const { ctx } = this;
    const now = Date.now();
    const datas = Object.assign({}, ctx.request.body, {
      createAt: now,
      updateAt: now,
    });
    const res = ctx.service.about.insert(datas);
    ctx.body = res;
  }
}

module.exports = AboutController;
