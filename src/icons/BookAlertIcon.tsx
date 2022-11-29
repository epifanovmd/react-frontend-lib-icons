import React, { FC, memo } from 'react';
import BookAlertSvg from '../svg/book-alert.svg';

export interface IBookAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookAlertIcon: FC<IBookAlertIconProps> = memo(props => {
  return <BookAlertSvg {...props} />;
});
