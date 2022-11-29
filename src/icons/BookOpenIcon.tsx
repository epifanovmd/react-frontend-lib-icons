import React, { FC, memo } from 'react';
import BookOpenSvg from '../svg/book-open.svg';

export interface IBookOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenIcon: FC<IBookOpenIconProps> = memo(props => {
  return <BookOpenSvg {...props} />;
});
