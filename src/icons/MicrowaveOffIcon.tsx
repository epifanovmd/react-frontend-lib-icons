import React, { FC, memo } from 'react';
import MicrowaveOffSvg from '../svg/microwave-off.svg';

export interface IMicrowaveOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrowaveOffIcon: FC<IMicrowaveOffIconProps> = memo(props => {
  return <MicrowaveOffSvg {...props} />;
});
