import React, { FC, memo } from 'react';
import BookmarkBoxMultipleOutlineSvg from '../svg/bookmark-box-multiple-outline.svg';

export interface IBookmarkBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkBoxMultipleOutlineIcon: FC<IBookmarkBoxMultipleOutlineIconProps> = memo(props => {
  return <BookmarkBoxMultipleOutlineSvg {...props} />;
});
