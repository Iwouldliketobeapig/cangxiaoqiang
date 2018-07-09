'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/v1/about/get', controller.about.findAll);
  router.post('/api/v1/about/create', controller.about.create);
};
