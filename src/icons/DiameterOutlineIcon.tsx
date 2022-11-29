import React, { FC, memo } from 'react';
import DiameterOutlineSvg from '../svg/diameter-outline.svg';

export interface IDiameterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiameterOutlineIcon: FC<IDiameterOutlineIconProps> = memo(props => {
  return <DiameterOutlineSvg {...props} />;
});
