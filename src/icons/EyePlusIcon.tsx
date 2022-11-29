import React, { FC, memo } from 'react';
import EyePlusSvg from '../svg/eye-plus.svg';

export interface IEyePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyePlusIcon: FC<IEyePlusIconProps> = memo(props => {
  return <EyePlusSvg {...props} />;
});
