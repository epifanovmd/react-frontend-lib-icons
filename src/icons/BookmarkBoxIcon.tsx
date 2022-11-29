import React, { FC, memo } from 'react';
import BookmarkBoxSvg from '../svg/bookmark-box.svg';

export interface IBookmarkBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkBoxIcon: FC<IBookmarkBoxIconProps> = memo(props => {
  return <BookmarkBoxSvg {...props} />;
});
