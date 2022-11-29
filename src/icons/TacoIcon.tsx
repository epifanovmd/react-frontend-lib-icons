import React, { FC, memo } from 'react';
import TacoSvg from '../svg/taco.svg';

export interface ITacoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TacoIcon: FC<ITacoIconProps> = memo(props => {
  return <TacoSvg {...props} />;
});
