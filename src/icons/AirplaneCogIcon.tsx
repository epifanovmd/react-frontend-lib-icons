import React, { FC, memo } from 'react';
import AirplaneCogSvg from '../svg/airplane-cog.svg';

export interface IAirplaneCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneCogIcon: FC<IAirplaneCogIconProps> = memo(props => {
  return <AirplaneCogSvg {...props} />;
});
