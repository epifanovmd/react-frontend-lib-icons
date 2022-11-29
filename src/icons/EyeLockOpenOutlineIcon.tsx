import React, { FC, memo } from 'react';
import EyeLockOpenOutlineSvg from '../svg/eye-lock-open-outline.svg';

export interface IEyeLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeLockOpenOutlineIcon: FC<IEyeLockOpenOutlineIconProps> = memo(props => {
  return <EyeLockOpenOutlineSvg {...props} />;
});
