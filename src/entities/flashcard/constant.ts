import {FlashCardGroup} from './interface';

export const EXAMPLE1: FlashCardGroup = {
  id: '1',
  name: 'Example 1 flash cards',
  cards: [
    {
      front:
        'identify the bone found in the leg between the knee and the hips.',
      back: 'femur',
    },
    {front: 'What is Swagger?', back: 'It displays the api available'},
    {
      front: 'spell the name of the capital city of Kentucky.',
      back: 'F-r-a-n-k-f-o-r-t',
    },
    {front: 'What is the GET request?', back: "It's a read"},
    {
      front:
        'In animal coloring and camouflage, what characteristic is usually indicated by bright, vivid colors?',
      back: 'poisonous/deadly',
    },
    {front: 'What is the POST request?', back: "It's the create request"},
    {
      front: 'What is the largest two digit prime number less than 100?',
      back: '97',
    },
    {
      front: 'What is a Patch request?',
      back: 'Update an existing resource with set of changes',
    },
    {
      front:
        'Which six-letter word refers to a Mexican blanket often slipped over the head and worn draped over the shoulder?',
      back: 'poncho',
    },
  ],
};

export const EXAMPLE2: FlashCardGroup = {
  id: '2',
  name: 'Example 2 flash cards',
  cards: [
    {
      front: 'What is the largest two digit prime number less than 100?',
      back: '97',
    },
    {
      front: 'What is a Patch request?',
      back: 'Update an existing resource with set of changes',
    },
    {
      front:
        'Which six-letter word refers to a Mexican blanket often slipped over the head and worn draped over the shoulder?',
      back: 'poncho',
    },
  ],
};
