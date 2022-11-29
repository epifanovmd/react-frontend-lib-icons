import React, { FC, memo } from 'react';
import EyeCircleOutlineSvg from '../svg/eye-circle-outline.svg';

export interface IEyeCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeCircleOutlineIcon: FC<IEyeCircleOutlineIconProps> = memo(props => {
  return <EyeCircleOutlineSvg {...props} />;
});
