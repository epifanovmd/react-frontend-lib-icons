import React, { FC, memo } from 'react';
import EyeMinusOutlineSvg from '../svg/eye-minus-outline.svg';

export interface IEyeMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeMinusOutlineIcon: FC<IEyeMinusOutlineIconProps> = memo(props => {
  return <EyeMinusOutlineSvg {...props} />;
});
