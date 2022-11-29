import React, { FC, memo } from 'react';
import RocketLaunchOutlineSvg from '../svg/rocket-launch-outline.svg';

export interface IRocketLaunchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RocketLaunchOutlineIcon: FC<IRocketLaunchOutlineIconProps> = memo(props => {
  return <RocketLaunchOutlineSvg {...props} />;
});
