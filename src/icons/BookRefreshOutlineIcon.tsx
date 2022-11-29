import React, { FC, memo } from 'react';
import BookRefreshOutlineSvg from '../svg/book-refresh-outline.svg';

export interface IBookRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookRefreshOutlineIcon: FC<IBookRefreshOutlineIconProps> = memo(props => {
  return <BookRefreshOutlineSvg {...props} />;
});
