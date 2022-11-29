import React, { FC, memo } from 'react';
import HotTubSvg from '../svg/hot-tub.svg';

export interface IHotTubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HotTubIcon: FC<IHotTubIconProps> = memo(props => {
  return <HotTubSvg {...props} />;
});
