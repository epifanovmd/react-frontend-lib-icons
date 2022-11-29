import React, { FC, memo } from 'react';
import BookLockOutlineSvg from '../svg/book-lock-outline.svg';

export interface IBookLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookLockOutlineIcon: FC<IBookLockOutlineIconProps> = memo(props => {
  return <BookLockOutlineSvg {...props} />;
});
