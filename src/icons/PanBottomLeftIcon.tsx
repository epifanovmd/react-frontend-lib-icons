import React, { FC, memo } from 'react';
import PanBottomLeftSvg from '../svg/pan-bottom-left.svg';

export interface IPanBottomLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanBottomLeftIcon: FC<IPanBottomLeftIconProps> = memo(props => {
  return <PanBottomLeftSvg {...props} />;
});
