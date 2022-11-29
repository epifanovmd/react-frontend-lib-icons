import React, { FC, memo } from 'react';
import EyeOffOutlineSvg from '../svg/eye-off-outline.svg';

export interface IEyeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeOffOutlineIcon: FC<IEyeOffOutlineIconProps> = memo(props => {
  return <EyeOffOutlineSvg {...props} />;
});
