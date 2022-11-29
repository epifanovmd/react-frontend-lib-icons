import React, { FC, memo } from 'react';
import HailSvg from '../svg/hail.svg';

export interface IHailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HailIcon: FC<IHailIconProps> = memo(props => {
  return <HailSvg {...props} />;
});
