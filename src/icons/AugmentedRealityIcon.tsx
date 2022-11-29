import React, { FC, memo } from 'react';
import AugmentedRealitySvg from '../svg/augmented-reality.svg';

export interface IAugmentedRealityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AugmentedRealityIcon: FC<IAugmentedRealityIconProps> = memo(props => {
  return <AugmentedRealitySvg {...props} />;
});
