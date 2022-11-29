import React, { FC, memo } from 'react';
import BeakerMinusOutlineSvg from '../svg/beaker-minus-outline.svg';

export interface IBeakerMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerMinusOutlineIcon: FC<IBeakerMinusOutlineIconProps> = memo(props => {
  return <BeakerMinusOutlineSvg {...props} />;
});
