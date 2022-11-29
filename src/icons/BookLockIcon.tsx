import React, { FC, memo } from 'react';
import BookLockSvg from '../svg/book-lock.svg';

export interface IBookLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookLockIcon: FC<IBookLockIconProps> = memo(props => {
  return <BookLockSvg {...props} />;
});
