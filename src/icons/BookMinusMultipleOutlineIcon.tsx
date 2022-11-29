import React, { FC, memo } from 'react';
import BookMinusMultipleOutlineSvg from '../svg/book-minus-multiple-outline.svg';

export interface IBookMinusMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMinusMultipleOutlineIcon: FC<IBookMinusMultipleOutlineIconProps> = memo(props => {
  return <BookMinusMultipleOutlineSvg {...props} />;
});
