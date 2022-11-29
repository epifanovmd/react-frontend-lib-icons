import React, { FC, memo } from 'react';
import EyeCircleSvg from '../svg/eye-circle.svg';

export interface IEyeCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeCircleIcon: FC<IEyeCircleIconProps> = memo(props => {
  return <EyeCircleSvg {...props} />;
});
