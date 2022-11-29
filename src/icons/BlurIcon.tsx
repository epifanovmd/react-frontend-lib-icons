import React, { FC, memo } from 'react';
import BlurSvg from '../svg/blur.svg';

export interface IBlurIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlurIcon: FC<IBlurIconProps> = memo(props => {
  return <BlurSvg {...props} />;
});
