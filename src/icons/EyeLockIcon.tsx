import React, { FC, memo } from 'react';
import EyeLockSvg from '../svg/eye-lock.svg';

export interface IEyeLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeLockIcon: FC<IEyeLockIconProps> = memo(props => {
  return <EyeLockSvg {...props} />;
});
