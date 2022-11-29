import React, { FC, memo } from 'react';
import BookRemoveMultipleOutlineSvg from '../svg/book-remove-multiple-outline.svg';

export interface IBookRemoveMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRemoveMultipleOutlineIcon: FC<IBookRemoveMultipleOutlineIconProps> = memo(props => {
  return <BookRemoveMultipleOutlineSvg {...props} />;
});
