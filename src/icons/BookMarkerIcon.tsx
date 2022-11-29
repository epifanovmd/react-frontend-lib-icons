import React, { FC, memo } from 'react';
import BookMarkerSvg from '../svg/book-marker.svg';

export interface IBookMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookMarkerIcon: FC<IBookMarkerIconProps> = memo(props => {
  return <BookMarkerSvg {...props} />;
});
