import React, { FC, memo } from 'react';
import MixedRealitySvg from '../svg/mixed-reality.svg';

export interface IMixedRealityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MixedRealityIcon: FC<IMixedRealityIconProps> = memo(props => {
  return <MixedRealitySvg {...props} />;
});
