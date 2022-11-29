import React, { FC, memo } from 'react';
import ParachuteOutlineSvg from '../svg/parachute-outline.svg';

export interface IParachuteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ParachuteOutlineIcon: FC<IParachuteOutlineIconProps> = memo(props => {
  return <ParachuteOutlineSvg {...props} />;
});
