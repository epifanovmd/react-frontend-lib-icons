import React, { FC, memo } from 'react';
import BookmarkBoxOutlineSvg from '../svg/bookmark-box-outline.svg';

export interface IBookmarkBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkBoxOutlineIcon: FC<IBookmarkBoxOutlineIconProps> = memo(props => {
  return <BookmarkBoxOutlineSvg {...props} />;
});
