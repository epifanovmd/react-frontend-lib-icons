import React, { FC, memo } from 'react';
import CeilingLightMultipleOutlineSvg from '../svg/ceiling-light-multiple-outline.svg';

export interface ICeilingLightMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingLightMultipleOutlineIcon: FC<ICeilingLightMultipleOutlineIconProps> = memo(props => {
  return <CeilingLightMultipleOutlineSvg {...props} />;
});
