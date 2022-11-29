import React, { FC, memo } from 'react';
import EyeOutlineSvg from '../svg/eye-outline.svg';

export interface IEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeOutlineIcon: FC<IEyeOutlineIconProps> = memo(props => {
  return <EyeOutlineSvg {...props} />;
});
