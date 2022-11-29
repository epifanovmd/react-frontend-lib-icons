import React, { FC, memo } from 'react';
import BookmarkMultipleOutlineSvg from '../svg/bookmark-multiple-outline.svg';

export interface IBookmarkMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMultipleOutlineIcon: FC<IBookmarkMultipleOutlineIconProps> = memo(props => {
  return <BookmarkMultipleOutlineSvg {...props} />;
});
