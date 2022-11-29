import React, { FC, memo } from 'react';
import BookArrowRightOutlineSvg from '../svg/book-arrow-right-outline.svg';

export interface IBookArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowRightOutlineIcon: FC<IBookArrowRightOutlineIconProps> = memo(props => {
  return <BookArrowRightOutlineSvg {...props} />;
});
