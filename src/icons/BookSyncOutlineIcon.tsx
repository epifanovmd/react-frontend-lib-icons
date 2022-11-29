import React, { FC, memo } from 'react';
import BookSyncOutlineSvg from '../svg/book-sync-outline.svg';

export interface IBookSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSyncOutlineIcon: FC<IBookSyncOutlineIconProps> = memo(props => {
  return <BookSyncOutlineSvg {...props} />;
});
