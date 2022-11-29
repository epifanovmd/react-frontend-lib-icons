import React, { FC, memo } from 'react';
import PowerPlugOutlineSvg from '../svg/power-plug-outline.svg';

export interface IPowerPlugOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerPlugOutlineIcon: FC<IPowerPlugOutlineIconProps> = memo(props => {
  return <PowerPlugOutlineSvg {...props} />;
});
