import React, { FC, memo } from 'react';
import EyedropperOffSvg from '../svg/eyedropper-off.svg';

export interface IEyedropperOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperOffIcon: FC<IEyedropperOffIconProps> = memo(props => {
  return <EyedropperOffSvg {...props} />;
});
