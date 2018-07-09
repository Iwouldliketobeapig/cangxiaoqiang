'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    UUIDV1,
    INTEGER,
    TEXT,
    DATE,
  } = app.Sequelize;
  const Dynamic = app.model.define('dynamic', {
    _id: {
      type: UUID,
      default: UUIDV1,
      allowNull: false,
    },
    tite: {
      type: STRING(32),
      allowNull: false,
    },
    img: {
      type: STRING(64),
    },
    content: {
      type: TEXT,
    },
    classify: {
      type: INTEGER,
    },
    summary: {
      type: STRING(256),
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
  return Dynamic;
};
