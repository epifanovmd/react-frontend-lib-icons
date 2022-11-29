import React, { FC, memo } from 'react';
import BookLockOpenOutlineSvg from '../svg/book-lock-open-outline.svg';

export interface IBookLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookLockOpenOutlineIcon: FC<IBookLockOpenOutlineIconProps> = memo(props => {
  return <BookLockOpenOutlineSvg {...props} />;
});
