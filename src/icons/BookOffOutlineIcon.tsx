import React, { FC, memo } from 'react';
import BookOffOutlineSvg from '../svg/book-off-outline.svg';

export interface IBookOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOffOutlineIcon: FC<IBookOffOutlineIconProps> = memo(props => {
  return <BookOffOutlineSvg {...props} />;
});
