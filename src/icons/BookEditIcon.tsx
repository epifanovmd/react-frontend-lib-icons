import React, { FC, memo } from 'react';
import BookEditSvg from '../svg/book-edit.svg';

export interface IBookEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookEditIcon: FC<IBookEditIconProps> = memo(props => {
  return <BookEditSvg {...props} />;
});
