import React, { FC, memo } from 'react';
import AirplaneEditSvg from '../svg/airplane-edit.svg';

export interface IAirplaneEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneEditIcon: FC<IAirplaneEditIconProps> = memo(props => {
  return <AirplaneEditSvg {...props} />;
});
