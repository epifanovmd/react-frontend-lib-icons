import React, { FC, memo } from 'react';
import EyeOffSvg from '../svg/eye-off.svg';

export interface IEyeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeOffIcon: FC<IEyeOffIconProps> = memo(props => {
  return <EyeOffSvg {...props} />;
});
