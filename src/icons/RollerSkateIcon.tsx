import React, { FC, memo } from 'react';
import RollerSkateSvg from '../svg/roller-skate.svg';

export interface IRollerSkateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerSkateIcon: FC<IRollerSkateIconProps> = memo(props => {
  return <RollerSkateSvg {...props} />;
});
