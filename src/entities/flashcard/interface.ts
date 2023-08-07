export interface IFlashCard {
  front: string;
  back: string;
}

export interface IFlashCardGroup {
  id: string;
  name: string;
  cards: IFlashCard[];
}

export enum FlashCardAnswerResult {
  EASY,
  MEDIUM,
  HARD,
}

export type IFlashCardAnswer = IFlashCard & {
  result: FlashCardAnswerResult;
};

export interface IFlashCardGroupAnswers {
  name: string;
  cards: IFlashCardAnswer[];
}
