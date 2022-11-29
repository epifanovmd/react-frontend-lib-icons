import React, { FC, memo } from 'react';
import FlashlightOffSvg from '../svg/flashlight-off.svg';

export interface IFlashlightOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashlightOffIcon: FC<IFlashlightOffIconProps> = memo(props => {
  return <FlashlightOffSvg {...props} />;
});
