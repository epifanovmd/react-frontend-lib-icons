import React, { FC, memo } from 'react';
import PropaneTankOutlineSvg from '../svg/propane-tank-outline.svg';

export interface IPropaneTankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PropaneTankOutlineIcon: FC<IPropaneTankOutlineIconProps> = memo(props => {
  return <PropaneTankOutlineSvg {...props} />;
});
