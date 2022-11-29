import React, { FC, memo } from 'react';
import BookClockOutlineSvg from '../svg/book-clock-outline.svg';

export interface IBookClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookClockOutlineIcon: FC<IBookClockOutlineIconProps> = memo(props => {
  return <BookClockOutlineSvg {...props} />;
});
