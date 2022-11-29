import React, { FC, memo } from 'react';
import BeakerCheckOutlineSvg from '../svg/beaker-check-outline.svg';

export interface IBeakerCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerCheckOutlineIcon: FC<IBeakerCheckOutlineIconProps> = memo(props => {
  return <BeakerCheckOutlineSvg {...props} />;
});
