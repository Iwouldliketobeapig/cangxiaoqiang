'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    UUIDV1,
    TEXT,
    DATE,
  } = app.Sequelize;
  const Depot = app.model.define('depot', {
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
      type: TEXT,
    },
    position: {
      type: STRING(32),
    },
    createdAt: {
      type: DATE,
    },
    updatedAt: {
      type: DATE,
    },
  },
  {
    timestamps: false,
  });
  return Depot;
};
