import React, { FC, memo } from 'react';
import BookAccountSvg from '../svg/book-account.svg';

export interface IBookAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookAccountIcon: FC<IBookAccountIconProps> = memo(props => {
  return <BookAccountSvg {...props} />;
});
