import React, { FC, memo } from 'react';
import AngleAcuteSvg from '../svg/angle-acute.svg';

export interface IAngleAcuteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AngleAcuteIcon: FC<IAngleAcuteIconProps> = memo(props => {
  return <AngleAcuteSvg {...props} />;
});
