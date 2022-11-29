import React, { FC, memo } from 'react';
import BookmarkOffOutlineSvg from '../svg/bookmark-off-outline.svg';

export interface IBookmarkOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkOffOutlineIcon: FC<IBookmarkOffOutlineIconProps> = memo(props => {
  return <BookmarkOffOutlineSvg {...props} />;
});
