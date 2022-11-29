import React, { FC, memo } from 'react';
import PanBottomRightSvg from '../svg/pan-bottom-right.svg';

export interface IPanBottomRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanBottomRightIcon: FC<IPanBottomRightIconProps> = memo(props => {
  return <PanBottomRightSvg {...props} />;
});
