import React, { FC, memo } from 'react';
import BookPlaySvg from '../svg/book-play.svg';

export interface IBookPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlayIcon: FC<IBookPlayIconProps> = memo(props => {
  return <BookPlaySvg {...props} />;
});
