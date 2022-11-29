import React, { FC, memo } from 'react';
import FanRemoveSvg from '../svg/fan-remove.svg';

export interface IFanRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanRemoveIcon: FC<IFanRemoveIconProps> = memo(props => {
  return <FanRemoveSvg {...props} />;
});
