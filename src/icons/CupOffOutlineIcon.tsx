import React, { FC, memo } from 'react';
import CupOffOutlineSvg from '../svg/cup-off-outline.svg';

export interface ICupOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupOffOutlineIcon: FC<ICupOffOutlineIconProps> = memo(props => {
  return <CupOffOutlineSvg {...props} />;
});
