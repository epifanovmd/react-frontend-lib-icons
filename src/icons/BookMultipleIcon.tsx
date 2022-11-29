import React, { FC, memo } from 'react';
import BookMultipleSvg from '../svg/book-multiple.svg';

export interface IBookMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMultipleIcon: FC<IBookMultipleIconProps> = memo(props => {
  return <BookMultipleSvg {...props} />;
});
