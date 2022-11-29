import React, { FC, memo } from 'react';
import BeeSvg from '../svg/bee.svg';

export interface IBeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeeIcon: FC<IBeeIconProps> = memo(props => {
  return <BeeSvg {...props} />;
});
