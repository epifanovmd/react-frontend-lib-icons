import React, { FC, memo } from 'react';
import EvPlugTeslaSvg from '../svg/ev-plug-tesla.svg';

export interface IEvPlugTeslaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugTeslaIcon: FC<IEvPlugTeslaIconProps> = memo(props => {
  return <EvPlugTeslaSvg {...props} />;
});
