import React, { FC, memo } from 'react';
import BookmarkRemoveSvg from '../svg/bookmark-remove.svg';

export interface IBookmarkRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkRemoveIcon: FC<IBookmarkRemoveIconProps> = memo(props => {
  return <BookmarkRemoveSvg {...props} />;
});
