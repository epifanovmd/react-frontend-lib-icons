import React, { FC, memo } from 'react';
import BeakerOutlineSvg from '../svg/beaker-outline.svg';

export interface IBeakerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerOutlineIcon: FC<IBeakerOutlineIconProps> = memo(props => {
  return <BeakerOutlineSvg {...props} />;
});
