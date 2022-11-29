import React, { FC, memo } from 'react';
import BookOffSvg from '../svg/book-off.svg';

export interface IBookOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOffIcon: FC<IBookOffIconProps> = memo(props => {
  return <BookOffSvg {...props} />;
});
