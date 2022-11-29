import React, { FC, memo } from 'react';
import HarddiskPlusSvg from '../svg/harddisk-plus.svg';

export interface IHarddiskPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HarddiskPlusIcon: FC<IHarddiskPlusIconProps> = memo(props => {
  return <HarddiskPlusSvg {...props} />;
});
