import { Work } from './../models/work-model';
import { Request, Response, NextFunction } from 'express';
import { userType } from '../models/user-model';

// this code for
export const fill_NULL_request_body = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userBaseUrl = '/api/user';
  const workBaseUrl = '/api/workes';

  try {
    switch (req.method) {
      case 'GET':
        next();
        break;

      case 'POST':
        // for user endpoint state
        if (req.baseUrl.includes(userBaseUrl)) {
          next();
        }

        // for work endpoint state
        else if (req.baseUrl.includes(workBaseUrl)) {
          validRequest(req)
            ? next()
            : res.status(400).send(`check you request.body`);
        } else {
          res.status(400).send('not found this endpoint');
        }

      // default
      default:
        break;
    }
  } catch (err) {
    res.send(err);
    // console.log(err)
  }
};

// in module function
// ==================================================================================== //

export const validRequestFeildWithArray = function (
  validArray: Array<string>,
  reqObject: any,
) {
  /**
   * check null value
   */
  const keysObjectArray = Object.keys(reqObject);
  if (!Boolean(keysObjectArray.length)) {
    return false;
  } else {
    /**
     * for filter null value and not have required property
     */
    let valueNotFound = validArray.filter((valid) => {
      /**
       * check for observ
       */
      if (keysObjectArray.includes(valid)) {
        if (reqObject[valid] == '' || reqObject[valid] == null) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    if (valueNotFound.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};

const validRequest = (req: Request) => {
  const { work, user } = req.body;
  const address = req.body.address || {};

  try {
    const userValid = validRequestFeildWithArray(['first_name'], user);
    const addressValid = validRequestFeildWithArray(['house'], address);
    const workValid = validRequestFeildWithArray(['work_name'], work);

    if (Object.keys(address).length === 0) {
      return userValid && workValid ? true : false;
    } else {
      return userValid && addressValid && workValid ? true : false;
    }
  } catch (error) {
    console.log(error);
  }
};
