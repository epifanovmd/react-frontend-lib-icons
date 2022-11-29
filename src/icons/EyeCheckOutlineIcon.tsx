import React, { FC, memo } from 'react';
import EyeCheckOutlineSvg from '../svg/eye-check-outline.svg';

export interface IEyeCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeCheckOutlineIcon: FC<IEyeCheckOutlineIconProps> = memo(props => {
  return <EyeCheckOutlineSvg {...props} />;
});
