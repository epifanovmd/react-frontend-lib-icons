import React, { FC, memo } from 'react';
import BlurOffSvg from '../svg/blur-off.svg';

export interface IBlurOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlurOffIcon: FC<IBlurOffIconProps> = memo(props => {
  return <BlurOffSvg {...props} />;
});
