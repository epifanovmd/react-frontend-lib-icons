import React, { FC, memo } from 'react';
import BookPlusMultipleSvg from '../svg/book-plus-multiple.svg';

export interface IBookPlusMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlusMultipleIcon: FC<IBookPlusMultipleIconProps> = memo(props => {
  return <BookPlusMultipleSvg {...props} />;
});
