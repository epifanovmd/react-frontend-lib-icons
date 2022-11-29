import React, { FC, memo } from 'react';
import BookMinusOutlineSvg from '../svg/book-minus-outline.svg';

export interface IBookMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMinusOutlineIcon: FC<IBookMinusOutlineIconProps> = memo(props => {
  return <BookMinusOutlineSvg {...props} />;
});
