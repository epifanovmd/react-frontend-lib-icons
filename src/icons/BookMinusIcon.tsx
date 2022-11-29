import React, { FC, memo } from 'react';
import BookMinusSvg from '../svg/book-minus.svg';

export interface IBookMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMinusIcon: FC<IBookMinusIconProps> = memo(props => {
  return <BookMinusSvg {...props} />;
});
