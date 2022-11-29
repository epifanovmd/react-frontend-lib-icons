import React, { FC, memo } from 'react';
import SproutOutlineSvg from '../svg/sprout-outline.svg';

export interface ISproutOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SproutOutlineIcon: FC<ISproutOutlineIconProps> = memo(props => {
  return <SproutOutlineSvg {...props} />;
});
