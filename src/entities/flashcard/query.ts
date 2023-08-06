import {useQuery} from '@tanstack/react-query';
import {FlashCardAPI} from './api';

export const useFlashCardGroupList = () =>
  useQuery({
    queryKey: ['flashcard-list'],
    queryFn: FlashCardAPI.list,
  });
