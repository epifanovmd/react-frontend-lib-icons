import React, { FC, memo } from 'react';
import ShieldAirplaneOutlineSvg from '../svg/shield-airplane-outline.svg';

export interface IShieldAirplaneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAirplaneOutlineIcon: FC<IShieldAirplaneOutlineIconProps> = memo(props => {
  return <ShieldAirplaneOutlineSvg {...props} />;
});
