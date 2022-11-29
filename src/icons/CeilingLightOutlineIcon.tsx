import React, { FC, memo } from 'react';
import CeilingLightOutlineSvg from '../svg/ceiling-light-outline.svg';

export interface ICeilingLightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingLightOutlineIcon: FC<ICeilingLightOutlineIconProps> = memo(props => {
  return <CeilingLightOutlineSvg {...props} />;
});
