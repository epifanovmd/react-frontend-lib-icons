import React, { FC, memo } from 'react';
import DiamondOutlineSvg from '../svg/diamond-outline.svg';

export interface IDiamondOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiamondOutlineIcon: FC<IDiamondOutlineIconProps> = memo(props => {
  return <DiamondOutlineSvg {...props} />;
});
