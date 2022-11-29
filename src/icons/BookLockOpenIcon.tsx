import React, { FC, memo } from 'react';
import BookLockOpenSvg from '../svg/book-lock-open.svg';

export interface IBookLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookLockOpenIcon: FC<IBookLockOpenIconProps> = memo(props => {
  return <BookLockOpenSvg {...props} />;
});
