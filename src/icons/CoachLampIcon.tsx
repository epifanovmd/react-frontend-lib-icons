import React, { FC, memo } from 'react';
import CoachLampSvg from '../svg/coach-lamp.svg';

export interface ICoachLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoachLampIcon: FC<ICoachLampIconProps> = memo(props => {
  return <CoachLampSvg {...props} />;
});
