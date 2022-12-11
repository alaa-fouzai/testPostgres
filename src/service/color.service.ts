import db from '../models';

import {ColorAttributes} from '../models/color';

export async function createColor(input: ColorAttributes) {
    try {
        console.log(input);
      const result = await db.Color.create(input);
      return result;
    } catch (e:any) {
        throw new Error(e);
    }
  }