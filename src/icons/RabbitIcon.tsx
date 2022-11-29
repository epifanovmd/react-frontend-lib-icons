import React, { FC, memo } from 'react';
import RabbitSvg from '../svg/rabbit.svg';

export interface IRabbitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RabbitIcon: FC<IRabbitIconProps> = memo(props => {
  return <RabbitSvg {...props} />;
});
