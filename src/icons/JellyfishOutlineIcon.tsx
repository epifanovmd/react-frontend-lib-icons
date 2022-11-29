import React, { FC, memo } from 'react';
import JellyfishOutlineSvg from '../svg/jellyfish-outline.svg';

export interface IJellyfishOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JellyfishOutlineIcon: FC<IJellyfishOutlineIconProps> = memo(props => {
  return <JellyfishOutlineSvg {...props} />;
});
