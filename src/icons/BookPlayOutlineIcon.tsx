import React, { FC, memo } from 'react';
import BookPlayOutlineSvg from '../svg/book-play-outline.svg';

export interface IBookPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookPlayOutlineIcon: FC<IBookPlayOutlineIconProps> = memo(props => {
  return <BookPlayOutlineSvg {...props} />;
});
