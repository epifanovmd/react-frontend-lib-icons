import React, { FC, memo } from 'react';
import BookmarkOffSvg from '../svg/bookmark-off.svg';

export interface IBookmarkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkOffIcon: FC<IBookmarkOffIconProps> = memo(props => {
  return <BookmarkOffSvg {...props} />;
});
