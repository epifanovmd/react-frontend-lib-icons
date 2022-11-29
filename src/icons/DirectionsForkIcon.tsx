import React, { FC, memo } from 'react';
import DirectionsForkSvg from '../svg/directions-fork.svg';

export interface IDirectionsForkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DirectionsForkIcon: FC<IDirectionsForkIconProps> = memo(props => {
  return <DirectionsForkSvg {...props} />;
});
