import React, { FC, memo } from 'react';
import VhsSvg from '../svg/vhs.svg';

export interface IVhsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VhsIcon: FC<IVhsIconProps> = memo(props => {
  return <VhsSvg {...props} />;
});
