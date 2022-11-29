import React, { FC, memo } from 'react';
import HvacSvg from '../svg/hvac.svg';

export interface IHvacIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HvacIcon: FC<IHvacIconProps> = memo(props => {
  return <HvacSvg {...props} />;
});
