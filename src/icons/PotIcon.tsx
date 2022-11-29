import React, { FC, memo } from 'react';
import PotSvg from '../svg/pot.svg';

export interface IPotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotIcon: FC<IPotIconProps> = memo(props => {
  return <PotSvg {...props} />;
});
