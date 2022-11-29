import React, { FC, memo } from 'react';
import EyeCheckSvg from '../svg/eye-check.svg';

export interface IEyeCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeCheckIcon: FC<IEyeCheckIconProps> = memo(props => {
  return <EyeCheckSvg {...props} />;
});
