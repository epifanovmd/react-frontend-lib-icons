import React, { FC, memo } from 'react';
import BookMultipleOutlineSvg from '../svg/book-multiple-outline.svg';

export interface IBookMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMultipleOutlineIcon: FC<IBookMultipleOutlineIconProps> = memo(props => {
  return <BookMultipleOutlineSvg {...props} />;
});
