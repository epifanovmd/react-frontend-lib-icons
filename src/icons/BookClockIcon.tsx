import React, { FC, memo } from 'react';
import BookClockSvg from '../svg/book-clock.svg';

export interface IBookClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookClockIcon: FC<IBookClockIconProps> = memo(props => {
  return <BookClockSvg {...props} />;
});
