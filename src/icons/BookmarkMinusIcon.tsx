import React, { FC, memo } from 'react';
import BookmarkMinusSvg from '../svg/bookmark-minus.svg';

export interface IBookmarkMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMinusIcon: FC<IBookmarkMinusIconProps> = memo(props => {
  return <BookmarkMinusSvg {...props} />;
});
