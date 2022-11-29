import React, { FC, memo } from 'react';
import BookRemoveSvg from '../svg/book-remove.svg';

export interface IBookRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRemoveIcon: FC<IBookRemoveIconProps> = memo(props => {
  return <BookRemoveSvg {...props} />;
});
