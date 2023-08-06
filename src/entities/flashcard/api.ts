import {EXAMPLE1, EXAMPLE2} from './constant';
import {FlashCardGroup} from './interface';

export class FlashCardAPI {
  static async list(): Promise<FlashCardGroup[]> {
    return new Promise(resolve => {
      return setTimeout(resolve, 1000);
    }).then(() => [EXAMPLE1, EXAMPLE2]);
  }
}
