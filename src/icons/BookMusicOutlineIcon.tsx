import React, { FC, memo } from 'react';
import BookMusicOutlineSvg from '../svg/book-music-outline.svg';

export interface IBookMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMusicOutlineIcon: FC<IBookMusicOutlineIconProps> = memo(props => {
  return <BookMusicOutlineSvg {...props} />;
});
