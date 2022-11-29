import React, { FC, memo } from 'react';
import EggFriedSvg from '../svg/egg-fried.svg';

export interface IEggFriedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggFriedIcon: FC<IEggFriedIconProps> = memo(props => {
  return <EggFriedSvg {...props} />;
});
