import React, { FC, memo } from 'react';
import FlaskRemoveSvg from '../svg/flask-remove.svg';

export interface IFlaskRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRemoveIcon: FC<IFlaskRemoveIconProps> = memo(props => {
  return <FlaskRemoveSvg {...props} />;
});
