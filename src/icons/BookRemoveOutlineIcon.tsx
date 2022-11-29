import React, { FC, memo } from 'react';
import BookRemoveOutlineSvg from '../svg/book-remove-outline.svg';

export interface IBookRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRemoveOutlineIcon: FC<IBookRemoveOutlineIconProps> = memo(props => {
  return <BookRemoveOutlineSvg {...props} />;
});
