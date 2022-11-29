import React, { FC, memo } from 'react';
import ViewCarouselOutlineSvg from '../svg/view-carousel-outline.svg';

export interface IViewCarouselOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewCarouselOutlineIcon: FC<IViewCarouselOutlineIconProps> = memo(props => {
  return <ViewCarouselOutlineSvg {...props} />;
});
