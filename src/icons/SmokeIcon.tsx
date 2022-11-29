import React, { FC, memo } from 'react';
import SmokeSvg from '../svg/smoke.svg';

export interface ISmokeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeIcon: FC<ISmokeIconProps> = memo(props => {
  return <SmokeSvg {...props} />;
});
