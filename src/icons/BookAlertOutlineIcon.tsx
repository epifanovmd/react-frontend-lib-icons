import React, { FC, memo } from 'react';
import BookAlertOutlineSvg from '../svg/book-alert-outline.svg';

export interface IBookAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookAlertOutlineIcon: FC<IBookAlertOutlineIconProps> = memo(props => {
  return <BookAlertOutlineSvg {...props} />;
});
