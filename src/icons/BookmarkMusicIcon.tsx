import React, { FC, memo } from 'react';
import BookmarkMusicSvg from '../svg/bookmark-music.svg';

export interface IBookmarkMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookmarkMusicIcon: FC<IBookmarkMusicIconProps> = memo(props => {
  return <BookmarkMusicSvg {...props} />;
});
