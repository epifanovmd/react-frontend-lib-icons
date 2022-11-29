import React, { FC, memo } from 'react';
import BookEducationOutlineSvg from '../svg/book-education-outline.svg';

export interface IBookEducationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookEducationOutlineIcon: FC<IBookEducationOutlineIconProps> = memo(props => {
  return <BookEducationOutlineSvg {...props} />;
});
