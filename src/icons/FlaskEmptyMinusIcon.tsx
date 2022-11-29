import React, { FC, memo } from 'react';
import FlaskEmptyMinusSvg from '../svg/flask-empty-minus.svg';

export interface IFlaskEmptyMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyMinusIcon: FC<IFlaskEmptyMinusIconProps> = memo(props => {
  return <FlaskEmptyMinusSvg {...props} />;
});
