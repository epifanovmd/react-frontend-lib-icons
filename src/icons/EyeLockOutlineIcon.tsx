import React, { FC, memo } from 'react';
import EyeLockOutlineSvg from '../svg/eye-lock-outline.svg';

export interface IEyeLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeLockOutlineIcon: FC<IEyeLockOutlineIconProps> = memo(props => {
  return <EyeLockOutlineSvg {...props} />;
});
