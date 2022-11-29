import React, { FC, memo } from 'react';
import BookmarkMusicOutlineSvg from '../svg/bookmark-music-outline.svg';

export interface IBookmarkMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMusicOutlineIcon: FC<IBookmarkMusicOutlineIconProps> = memo(props => {
  return <BookmarkMusicOutlineSvg {...props} />;
});
