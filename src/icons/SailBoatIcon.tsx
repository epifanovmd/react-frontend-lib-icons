import React, { FC, memo } from 'react';
import SailBoatSvg from '../svg/sail-boat.svg';

export interface ISailBoatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SailBoatIcon: FC<ISailBoatIconProps> = memo(props => {
  return <SailBoatSvg {...props} />;
});
