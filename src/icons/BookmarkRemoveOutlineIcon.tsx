import React, { FC, memo } from 'react';
import BookmarkRemoveOutlineSvg from '../svg/bookmark-remove-outline.svg';

export interface IBookmarkRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkRemoveOutlineIcon: FC<IBookmarkRemoveOutlineIconProps> = memo(props => {
  return <BookmarkRemoveOutlineSvg {...props} />;
});
