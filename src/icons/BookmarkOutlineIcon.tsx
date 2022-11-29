import React, { FC, memo } from 'react';
import BookmarkOutlineSvg from '../svg/bookmark-outline.svg';

export interface IBookmarkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkOutlineIcon: FC<IBookmarkOutlineIconProps> = memo(props => {
  return <BookmarkOutlineSvg {...props} />;
});
