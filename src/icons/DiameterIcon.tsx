import React, { FC, memo } from 'react';
import DiameterSvg from '../svg/diameter.svg';

export interface IDiameterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiameterIcon: FC<IDiameterIconProps> = memo(props => {
  return <DiameterSvg {...props} />;
});
