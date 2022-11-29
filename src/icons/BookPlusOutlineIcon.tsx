import React, { FC, memo } from 'react';
import BookPlusOutlineSvg from '../svg/book-plus-outline.svg';

export interface IBookPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlusOutlineIcon: FC<IBookPlusOutlineIconProps> = memo(props => {
  return <BookPlusOutlineSvg {...props} />;
});
