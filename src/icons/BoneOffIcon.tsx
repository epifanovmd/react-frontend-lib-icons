import React, { FC, memo } from 'react';
import BoneOffSvg from '../svg/bone-off.svg';

export interface IBoneOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoneOffIcon: FC<IBoneOffIconProps> = memo(props => {
  return <BoneOffSvg {...props} />;
});
