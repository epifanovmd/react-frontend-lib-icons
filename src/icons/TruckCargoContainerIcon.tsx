import React, { FC, memo } from 'react';
import TruckCargoContainerSvg from '../svg/truck-cargo-container.svg';

export interface ITruckCargoContainerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckCargoContainerIcon: FC<ITruckCargoContainerIconProps> = memo(props => {
  return <TruckCargoContainerSvg {...props} />;
});
