import React, { FC, memo } from 'react';
import BookmarkMultipleSvg from '../svg/bookmark-multiple.svg';

export interface IBookmarkMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMultipleIcon: FC<IBookmarkMultipleIconProps> = memo(props => {
  return <BookmarkMultipleSvg {...props} />;
});
