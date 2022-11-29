import React, { FC, memo } from 'react';
import EyePlusOutlineSvg from '../svg/eye-plus-outline.svg';

export interface IEyePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyePlusOutlineIcon: FC<IEyePlusOutlineIconProps> = memo(props => {
  return <EyePlusOutlineSvg {...props} />;
});
