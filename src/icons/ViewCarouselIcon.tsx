import React, { FC, memo } from 'react';
import ViewCarouselSvg from '../svg/view-carousel.svg';

export interface IViewCarouselIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewCarouselIcon: FC<IViewCarouselIconProps> = memo(props => {
  return <ViewCarouselSvg {...props} />;
});
