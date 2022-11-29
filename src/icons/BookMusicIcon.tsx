import React, { FC, memo } from 'react';
import BookMusicSvg from '../svg/book-music.svg';

export interface IBookMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMusicIcon: FC<IBookMusicIconProps> = memo(props => {
  return <BookMusicSvg {...props} />;
});
