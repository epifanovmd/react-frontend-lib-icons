import React, { FC, memo } from 'react';
import FlaskMinusSvg from '../svg/flask-minus.svg';

export interface IFlaskMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskMinusIcon: FC<IFlaskMinusIconProps> = memo(props => {
  return <FlaskMinusSvg {...props} />;
});
