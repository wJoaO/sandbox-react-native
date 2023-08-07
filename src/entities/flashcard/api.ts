import {EXAMPLE1, EXAMPLE2} from './constant';
import {IFlashCardGroup} from './interface';

export class FlashCardAPI {
  static async list(): Promise<IFlashCardGroup[]> {
    return new Promise(resolve => {
      return setTimeout(resolve, 1000);
    }).then(() => [EXAMPLE1, EXAMPLE2]);
  }

  static async detail(groupId: string): Promise<IFlashCardGroup | undefined> {
    const groups = await this.list();
    return groups.find(g => g.id === groupId);
  }
}
