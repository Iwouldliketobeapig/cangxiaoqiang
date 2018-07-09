'use strict';

const Service = require('egg').Service;

class AboutService extends Service {
  async insert(option) {
    const res = await this.ctx.model.About.create(option);
    return res;
  }

  async findAll() {
    const res = await this.ctx.model.About.findAll({
    });
    return res;
  }
}

module.exports = AboutService;
