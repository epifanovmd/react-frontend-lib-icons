import React, { FC, memo } from 'react';
import FlaskSvg from '../svg/flask.svg';

export interface IFlaskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskIcon: FC<IFlaskIconProps> = memo(props => {
  return <FlaskSvg {...props} />;
});
