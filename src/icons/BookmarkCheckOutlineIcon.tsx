import React, { FC, memo } from 'react';
import BookmarkCheckOutlineSvg from '../svg/bookmark-check-outline.svg';

export interface IBookmarkCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkCheckOutlineIcon: FC<IBookmarkCheckOutlineIconProps> = memo(props => {
  return <BookmarkCheckOutlineSvg {...props} />;
});
