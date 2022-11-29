import React, { FC, memo } from 'react';
import BoomboxSvg from '../svg/boombox.svg';

export interface IBoomboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomboxIcon: FC<IBoomboxIconProps> = memo(props => {
  return <BoomboxSvg {...props} />;
});
