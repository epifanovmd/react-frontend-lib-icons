import React, { FC, memo } from 'react';
import FlaskOffSvg from '../svg/flask-off.svg';

export interface IFlaskOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskOffIcon: FC<IFlaskOffIconProps> = memo(props => {
  return <FlaskOffSvg {...props} />;
});
