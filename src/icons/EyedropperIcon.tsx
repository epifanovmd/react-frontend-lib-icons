import React, { FC, memo } from 'react';
import EyedropperSvg from '../svg/eyedropper.svg';

export interface IEyedropperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperIcon: FC<IEyedropperIconProps> = memo(props => {
  return <EyedropperSvg {...props} />;
});
