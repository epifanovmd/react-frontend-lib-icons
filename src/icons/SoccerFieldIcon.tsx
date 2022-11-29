import React, { FC, memo } from 'react';
import SoccerFieldSvg from '../svg/soccer-field.svg';

export interface ISoccerFieldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoccerFieldIcon: FC<ISoccerFieldIconProps> = memo(props => {
  return <SoccerFieldSvg {...props} />;
});
