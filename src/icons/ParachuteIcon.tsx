import React, { FC, memo } from 'react';
import ParachuteSvg from '../svg/parachute.svg';

export interface IParachuteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ParachuteIcon: FC<IParachuteIconProps> = memo(props => {
  return <ParachuteSvg {...props} />;
});
