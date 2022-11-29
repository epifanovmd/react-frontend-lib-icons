import React, { FC, memo } from 'react';
import BookOutlineSvg from '../svg/book-outline.svg';

export interface IBookOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOutlineIcon: FC<IBookOutlineIconProps> = memo(props => {
  return <BookOutlineSvg {...props} />;
});
