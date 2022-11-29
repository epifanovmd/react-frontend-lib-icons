import React, { FC, memo } from 'react';
import HarddiskSvg from '../svg/harddisk.svg';

export interface IHarddiskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HarddiskIcon: FC<IHarddiskIconProps> = memo(props => {
  return <HarddiskSvg {...props} />;
});
