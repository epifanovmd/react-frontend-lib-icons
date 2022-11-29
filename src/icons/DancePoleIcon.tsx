import React, { FC, memo } from 'react';
import DancePoleSvg from '../svg/dance-pole.svg';

export interface IDancePoleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DancePoleIcon: FC<IDancePoleIconProps> = memo(props => {
  return <DancePoleSvg {...props} />;
});
