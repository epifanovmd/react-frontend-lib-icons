import React, { FC, memo } from 'react';
import GrainSvg from '../svg/grain.svg';

export interface IGrainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GrainIcon: FC<IGrainIconProps> = memo(props => {
  return <GrainSvg {...props} />;
});
