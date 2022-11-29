import React, { FC, memo } from 'react';
import BookmarkBoxMultipleSvg from '../svg/bookmark-box-multiple.svg';

export interface IBookmarkBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkBoxMultipleIcon: FC<IBookmarkBoxMultipleIconProps> = memo(props => {
  return <BookmarkBoxMultipleSvg {...props} />;
});
