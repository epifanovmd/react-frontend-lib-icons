import React, { FC, memo } from 'react';
import BookMarkerOutlineSvg from '../svg/book-marker-outline.svg';

export interface IBookMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMarkerOutlineIcon: FC<IBookMarkerOutlineIconProps> = memo(props => {
  return <BookMarkerOutlineSvg {...props} />;
});
