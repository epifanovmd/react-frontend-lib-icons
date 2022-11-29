import React, { FC, memo } from 'react';
import BrainSvg from '../svg/brain.svg';

export interface IBrainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrainIcon: FC<IBrainIconProps> = memo(props => {
  return <BrainSvg {...props} />;
});
