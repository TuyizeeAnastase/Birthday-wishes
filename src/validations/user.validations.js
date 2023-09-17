import joi from "joi";

export const userValidation=async(req,res,next)=>{
    const userSchema=joi.object({
        firstname:joi.string().required().messages({}),
        lastname:joi.string().required().messages({}),
        email:joi.string().required().messages({}),
        birth_day:joi.string().required().messages({
            "any.required": "Birth Date is required",
        }),
    });
    const value = await userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
}