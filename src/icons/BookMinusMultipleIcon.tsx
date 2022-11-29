import React, { FC, memo } from 'react';
import BookMinusMultipleSvg from '../svg/book-minus-multiple.svg';

export interface IBookMinusMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMinusMultipleIcon: FC<IBookMinusMultipleIconProps> = memo(props => {
  return <BookMinusMultipleSvg {...props} />;
});
