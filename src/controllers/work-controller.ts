import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user-model';
import { Work } from '../models/work-model';
import { WorkRequest } from '../myInterface.interface';
import { Address } from '../models/address-model';


/**=====================================================================================================================
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const createNewOne = async (
  req: WorkRequest,
  res: Response,
  next: NextFunction,
) => {
  // if no address Data, then save user Data's and work Data's
  // else with address
  try {
    const { user, work } = req.body;
    const { address } = req.body;

    // const user_doc = new User;
    // const address_doc = new Address;
    // const work_doc = new Work

    if (Object.keys(address!).length == 0 || address == undefined) {

      const user_doc = await User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
      });

      const work_doc = await Work.create({
        work_name: work.work_name,
        monk: work.monk,
        location: work.location,
        date_time: new Date().toString(),
        phone: user_doc.phone,
        user: user_doc._id,
      });

      // save doc
      user_doc
        .save()
        .then(() => {
          work_doc.save();
        })
        .then(() => {
          res.status(200).send('save data successfully');
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('error at server on save datas');
        });
    } else {

      // =======
      const user_doc = await User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
      });

      const address_doc = await Address.create({
        house: address.house,
        sub_disrtrict: address.sub_district,
        district: address.district,
        province: address.province,
        user: user_doc.id,
      });

      const work_doc = await Work.create({
        work_name: work.work_name,
        monk: work.monk,
        location: work.location,
        date_time: new Date().toString(),
        user: user_doc._id,
        phone: user_doc.phone,
        address: address_doc._id
      });

      console.log(address_doc)

      work_doc
        .save()
        .then(() => {
          address_doc.save();
          user_doc.save();
        })
        .then(() => {
          res.send('data save successfull');
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('server error at save data');
        });
    }
  } catch (error) {
    console.log(error);
  }
};





/**=====================================================================================================================
 * 
 * @param req 
 * @param res 
 * @param next 
 */

export const deleteOne = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const workDel = Work.deleteOne({ _id: req.params.id })
      .exec()
      .then(() => {
        res.send(`delete work id = ${req.params.id}`);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('delete not success');
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


/**===============================================================================================================
 * 
 * @param req 
 * @param res 
 * @param next 
 */

export const updateOne = (req: Request, res: Response, next: NextFunction) => {
  try {
    Work.updateOne({ _id: req.params.id }, { ...req.body.work })
      .exec()
      .then((re) => {
        res.json(re);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};



/**===================================================================================================================
 * 
 * @param req 
 * @param res 
 */
export const getWorkAll = async (req: Request, res: Response) => {
  try {
    const datas = await Work.find().populate('user').populate('address')
    res.status(200).json(datas);
  } catch (error) {
    console.log(error)
  }
};


/**====================================================================================================================
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const data = await Work.findById(id).exec();
    if (data == null) {
      res.send('id not founde');
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('get by id error');
  }
};
