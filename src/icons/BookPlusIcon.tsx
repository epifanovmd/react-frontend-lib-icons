import React, { FC, memo } from 'react';
import BookPlusSvg from '../svg/book-plus.svg';

export interface IBookPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlusIcon: FC<IBookPlusIconProps> = memo(props => {
  return <BookPlusSvg {...props} />;
});
