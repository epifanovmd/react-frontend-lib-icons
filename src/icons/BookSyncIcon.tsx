import React, { FC, memo } from 'react';
import BookSyncSvg from '../svg/book-sync.svg';

export interface IBookSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSyncIcon: FC<IBookSyncIconProps> = memo(props => {
  return <BookSyncSvg {...props} />;
});
