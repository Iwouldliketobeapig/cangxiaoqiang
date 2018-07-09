'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    UUIDV1,
    TEXT,
    DATE,
  } = app.Sequelize;
  const Job = app.model.define('job', {
    _id: {
      type: UUID,
      default: UUIDV1,
      allowNull: false,
    },
    title: {
      type: STRING(32),
      allowNull: false,
    },
    content: {
      type: TEXT,
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
  return Job;
};
