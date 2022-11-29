import React, { FC, memo } from 'react';
import MeteorSvg from '../svg/meteor.svg';

export interface IMeteorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeteorIcon: FC<IMeteorIconProps> = memo(props => {
  return <MeteorSvg {...props} />;
});
