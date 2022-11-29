import React, { FC, memo } from 'react';
import BookArrowLeftOutlineSvg from '../svg/book-arrow-left-outline.svg';

export interface IBookArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowLeftOutlineIcon: FC<IBookArrowLeftOutlineIconProps> = memo(props => {
  return <BookArrowLeftOutlineSvg {...props} />;
});
