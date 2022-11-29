import React, { FC, memo } from 'react';
import FlashlightSvg from '../svg/flashlight.svg';

export interface IFlashlightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashlightIcon: FC<IFlashlightIconProps> = memo(props => {
  return <FlashlightSvg {...props} />;
});
