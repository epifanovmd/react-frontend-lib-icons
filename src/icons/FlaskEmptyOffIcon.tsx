import React, { FC, memo } from 'react';
import FlaskEmptyOffSvg from '../svg/flask-empty-off.svg';

export interface IFlaskEmptyOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyOffIcon: FC<IFlaskEmptyOffIconProps> = memo(props => {
  return <FlaskEmptyOffSvg {...props} />;
});
