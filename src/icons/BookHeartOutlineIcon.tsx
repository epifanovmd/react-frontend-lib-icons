import React, { FC, memo } from 'react';
import BookHeartOutlineSvg from '../svg/book-heart-outline.svg';

export interface IBookHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookHeartOutlineIcon: FC<IBookHeartOutlineIconProps> = memo(props => {
  return <BookHeartOutlineSvg {...props} />;
});
