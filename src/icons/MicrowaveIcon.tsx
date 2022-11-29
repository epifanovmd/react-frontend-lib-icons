import React, { FC, memo } from 'react';
import MicrowaveSvg from '../svg/microwave.svg';

export interface IMicrowaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrowaveIcon: FC<IMicrowaveIconProps> = memo(props => {
  return <MicrowaveSvg {...props} />;
});
