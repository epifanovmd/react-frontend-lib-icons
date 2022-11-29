import React, { FC, memo } from 'react';
import HarddiskRemoveSvg from '../svg/harddisk-remove.svg';

export interface IHarddiskRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HarddiskRemoveIcon: FC<IHarddiskRemoveIconProps> = memo(props => {
  return <HarddiskRemoveSvg {...props} />;
});
