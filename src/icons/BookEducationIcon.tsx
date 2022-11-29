import React, { FC, memo } from 'react';
import BookEducationSvg from '../svg/book-education.svg';

export interface IBookEducationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookEducationIcon: FC<IBookEducationIconProps> = memo(props => {
  return <BookEducationSvg {...props} />;
});
