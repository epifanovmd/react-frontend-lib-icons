import React, { FC, memo } from 'react';
import PitchforkSvg from '../svg/pitchfork.svg';

export interface IPitchforkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PitchforkIcon: FC<IPitchforkIconProps> = memo(props => {
  return <PitchforkSvg {...props} />;
});
