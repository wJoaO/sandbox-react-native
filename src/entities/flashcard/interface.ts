export interface FlashCard {
  front: string;
  back: string;
}

export interface FlashCardGroup {
  id: string;
  name: string;
  cards: FlashCard[];
}

export enum FlashCardAnswerResult {
  EASY,
  MEDIUM,
  HARD,
}

export type FlashCardAnswer = FlashCard & {
  result: FlashCardAnswerResult;
};

export interface FlashCardGroupAnswers {
  name: string;
  cards: FlashCardAnswer[];
}
