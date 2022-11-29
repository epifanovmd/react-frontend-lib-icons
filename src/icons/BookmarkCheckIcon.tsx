import React, { FC, memo } from 'react';
import BookmarkCheckSvg from '../svg/bookmark-check.svg';

export interface IBookmarkCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkCheckIcon: FC<IBookmarkCheckIconProps> = memo(props => {
  return <BookmarkCheckSvg {...props} />;
});
