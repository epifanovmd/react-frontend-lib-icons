import React, { FC, memo } from 'react';
import BookRefreshSvg from '../svg/book-refresh.svg';

export interface IBookRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRefreshIcon: FC<IBookRefreshIconProps> = memo(props => {
  return <BookRefreshSvg {...props} />;
});
