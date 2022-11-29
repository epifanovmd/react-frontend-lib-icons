import React, { FC, memo } from 'react';
import BookHeartSvg from '../svg/book-heart.svg';

export interface IBookHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookHeartIcon: FC<IBookHeartIconProps> = memo(props => {
  return <BookHeartSvg {...props} />;
});
