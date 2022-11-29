import React, { FC, memo } from 'react';
import BookmarkPlusOutlineSvg from '../svg/bookmark-plus-outline.svg';

export interface IBookmarkPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkPlusOutlineIcon: FC<IBookmarkPlusOutlineIconProps> = memo(props => {
  return <BookmarkPlusOutlineSvg {...props} />;
});
