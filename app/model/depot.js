'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    UUIDV1,

  } = app.Sequelize;
  const Banner = app.model.define('depot', {
    _id: {
      type: UUID,
      default: UUIDV1,
      allowNull: false,
    },
    province: {
      type: STRING(32),
    },
    city: {
      type: STRING(32),
    },
    img: {
      type: STRING(64),
    },
    description: {
      type: STRING(256),
    },
    position: {
      type: STRING(32),
    },
  });
  return Banner;
};
