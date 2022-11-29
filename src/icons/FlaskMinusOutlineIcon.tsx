import React, { FC, memo } from 'react';
import FlaskMinusOutlineSvg from '../svg/flask-minus-outline.svg';

export interface IFlaskMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskMinusOutlineIcon: FC<IFlaskMinusOutlineIconProps> = memo(props => {
  return <FlaskMinusOutlineSvg {...props} />;
});
