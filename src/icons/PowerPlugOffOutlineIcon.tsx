import React, { FC, memo } from 'react';
import PowerPlugOffOutlineSvg from '../svg/power-plug-off-outline.svg';

export interface IPowerPlugOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerPlugOffOutlineIcon: FC<IPowerPlugOffOutlineIconProps> = memo(props => {
  return <PowerPlugOffOutlineSvg {...props} />;
});
