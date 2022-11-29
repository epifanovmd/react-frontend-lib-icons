import React, { FC, memo } from 'react';
import BookRemoveMultipleSvg from '../svg/book-remove-multiple.svg';

export interface IBookRemoveMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRemoveMultipleIcon: FC<IBookRemoveMultipleIconProps> = memo(props => {
  return <BookRemoveMultipleSvg {...props} />;
});
