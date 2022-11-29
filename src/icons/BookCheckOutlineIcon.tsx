import React, { FC, memo } from 'react';
import BookCheckOutlineSvg from '../svg/book-check-outline.svg';

export interface IBookCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCheckOutlineIcon: FC<IBookCheckOutlineIconProps> = memo(props => {
  return <BookCheckOutlineSvg {...props} />;
});
