import {useQuery} from '@tanstack/react-query';
import {FlashCardAPI} from './api';

export const useFlashCardGroupList = () =>
  useQuery({
    queryKey: ['flashcard-list'],
    queryFn: FlashCardAPI.list,
  });

export const useFlashCardGroup = (groupId: string) =>
  useQuery({
    queryKey: ['flashcard-detail', groupId],
    queryFn: () => FlashCardAPI.detail(groupId),
  });
