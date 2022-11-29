import React, { FC, memo } from 'react';
import AmplifierOffSvg from '../svg/amplifier-off.svg';

export interface IAmplifierOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AmplifierOffIcon: FC<IAmplifierOffIconProps> = memo(props => {
  return <AmplifierOffSvg {...props} />;
});
