import { Response, Request, NextFunction } from "express";
import { GenericHelper } from "../../utils/helpers";

const { validateInput } = GenericHelper;

class ValidationMiddleware {
  /**
   * @static
   */
  static validate<T>(schema: T) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await validateInput(schema, req.body);
        next();
      } catch (error) {
        res.status(404).json({
          error,
        });
      }
    };
  }
}

export default ValidationMiddleware;
