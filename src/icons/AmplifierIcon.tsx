import React, { FC, memo } from 'react';
import AmplifierSvg from '../svg/amplifier.svg';

export interface IAmplifierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AmplifierIcon: FC<IAmplifierIconProps> = memo(props => {
  return <AmplifierSvg {...props} />;
});
