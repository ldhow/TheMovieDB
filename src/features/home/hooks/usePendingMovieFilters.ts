import { useState } from 'react';
import { useMovieStore, useMovieActions } from '../stores/useMovieStores';
import { useShallow } from 'zustand/react/shallow';
import { IMovieCategory, IOrderType } from '~/types/model';

export const usePendingMovieFilters = () => {
  const [storeCategory, storeOrderType, storeSearchQuery] = useMovieStore(
    useShallow((state) => [state.movieCategory, state.orderType, state.searchQuery])
  );

  const [pendingCategory, setPendingCategory] = useState<IMovieCategory>(storeCategory);
  const [pendingOrderType, setPendingOrderType] = useState<IOrderType>(storeOrderType);
  const [pendingSearchQuery, setPendingSearchQuery] = useState(storeSearchQuery);

  const { setMovieCategory, setOrderType, setSearchQuery } = useMovieActions();

  const hasChanged =
    pendingCategory !== storeCategory ||
    pendingOrderType !== storeOrderType ||
    pendingSearchQuery !== storeSearchQuery;

  const applyChanges = () => {
    setMovieCategory(pendingCategory);
    setOrderType(pendingOrderType);
    setSearchQuery(pendingSearchQuery);
  };

  return {
    pendingCategory,
    setPendingCategory,
    pendingOrderType,
    setPendingOrderType,
    pendingSearchQuery,
    setPendingSearchQuery,
    hasChanged,
    applyChanges,
  };
};
