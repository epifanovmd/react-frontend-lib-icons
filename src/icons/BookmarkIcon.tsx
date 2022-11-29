import React, { FC, memo } from 'react';
import BookmarkSvg from '../svg/bookmark.svg';

export interface IBookmarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkIcon: FC<IBookmarkIconProps> = memo(props => {
  return <BookmarkSvg {...props} />;
});
