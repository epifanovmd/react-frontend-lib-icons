import React, { FC, memo } from 'react';
import BoneSvg from '../svg/bone.svg';

export interface IBoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoneIcon: FC<IBoneIconProps> = memo(props => {
  return <BoneSvg {...props} />;
});
