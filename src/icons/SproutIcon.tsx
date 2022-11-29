import React, { FC, memo } from 'react';
import SproutSvg from '../svg/sprout.svg';

export interface ISproutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SproutIcon: FC<ISproutIconProps> = memo(props => {
  return <SproutSvg {...props} />;
});
