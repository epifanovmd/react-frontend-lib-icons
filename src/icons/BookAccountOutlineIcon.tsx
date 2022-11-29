import React, { FC, memo } from 'react';
import BookAccountOutlineSvg from '../svg/book-account-outline.svg';

export interface IBookAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookAccountOutlineIcon: FC<IBookAccountOutlineIconProps> = memo(props => {
  return <BookAccountOutlineSvg {...props} />;
});
