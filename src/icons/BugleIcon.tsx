import React, { FC, memo } from 'react';
import BugleSvg from '../svg/bugle.svg';

export interface IBugleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugleIcon: FC<IBugleIconProps> = memo(props => {
  return <BugleSvg {...props} />;
});
