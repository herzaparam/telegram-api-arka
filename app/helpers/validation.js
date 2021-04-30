const Joi = require("joi");

module.exports = {
  validationUsers: (users) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required().strict(),
      name: Joi.string().required(),
    });
    return schema.validate(users);
  },
  validationUsersUpdate: (users) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      name: Joi.string().required(),
      bio: Joi.string().required(),
      phone_number: Joi.number().required()
    });
    return schema.validate(users);
  },
  validationUsersUpdatePassword: (users) => {
    const schema = Joi.object({
      password: Joi.string().min(8).required().strict(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict(),
    });
    return schema.validate(users);
  },
};
