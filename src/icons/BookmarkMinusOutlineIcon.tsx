import React, { FC, memo } from 'react';
import BookmarkMinusOutlineSvg from '../svg/bookmark-minus-outline.svg';

export interface IBookmarkMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMinusOutlineIcon: FC<IBookmarkMinusOutlineIconProps> = memo(props => {
  return <BookmarkMinusOutlineSvg {...props} />;
});
