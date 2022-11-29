import React, { FC, memo } from 'react';
import EyeLockOpenSvg from '../svg/eye-lock-open.svg';

export interface IEyeLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeLockOpenIcon: FC<IEyeLockOpenIconProps> = memo(props => {
  return <EyeLockOpenSvg {...props} />;
});
