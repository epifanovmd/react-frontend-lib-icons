import React, { FC, memo } from 'react';
import BookPlusMultipleOutlineSvg from '../svg/book-plus-multiple-outline.svg';

export interface IBookPlusMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlusMultipleOutlineIcon: FC<IBookPlusMultipleOutlineIconProps> = memo(props => {
  return <BookPlusMultipleOutlineSvg {...props} />;
});
