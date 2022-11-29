import React, { FC, memo } from 'react';
import BookmarkPlusSvg from '../svg/bookmark-plus.svg';

export interface IBookmarkPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkPlusIcon: FC<IBookmarkPlusIconProps> = memo(props => {
  return <BookmarkPlusSvg {...props} />;
});
