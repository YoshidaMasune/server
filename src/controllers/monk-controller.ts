import { validRequestFeildWithArray } from './../middlewares/fillRequest';
import { Response, Request, NextFunction } from 'express';
import { Monk } from '../models/monk-model';

export const createOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const fillArray = ['first_name', 'last_name', 'prefix'];
    const monkvalid = validRequestFeildWithArray(fillArray, req.body.monk);

    console.log(monkvalid);

    if (monkvalid) {
      const monk_doc = await Monk.create({
        ...req.body.monk,
      });

      monk_doc
        .save()
        .then(() => {
          res.send('monk save successfull');
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    } else {
      res.status(400).send('check your request');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 * Update
 * @param req
 * @param res
 * @param next
 */
export const updateOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const editObject = req.body.monk;

  console.log(id);
  Monk.updateOne({ _id: id }, { ...editObject })
    .then((result: any) => {
      res.status(200).json(result);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send('error at save update data');
    });
};

/**
 * GET ALL DATA FROM MONK
 * @param req
 * @param res
 */
export const getAll = async (req: Request, res: Response) => {
  try {
    const datas = await Monk.find().exec();

    res.status(200).json(datas);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 *
 */

export const deleteOne = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    Monk.deleteOne({ _id: id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
