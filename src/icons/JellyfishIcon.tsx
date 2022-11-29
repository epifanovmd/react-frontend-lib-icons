import React, { FC, memo } from 'react';
import JellyfishSvg from '../svg/jellyfish.svg';

export interface IJellyfishIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JellyfishIcon: FC<IJellyfishIconProps> = memo(props => {
  return <JellyfishSvg {...props} />;
});
