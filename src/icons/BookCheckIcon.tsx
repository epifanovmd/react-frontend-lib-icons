import React, { FC, memo } from 'react';
import BookCheckSvg from '../svg/book-check.svg';

export interface IBookCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCheckIcon: FC<IBookCheckIconProps> = memo(props => {
  return <BookCheckSvg {...props} />;
});
