import React, { FC, memo } from 'react';
import FlaskEmptySvg from '../svg/flask-empty.svg';

export interface IFlaskEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyIcon: FC<IFlaskEmptyIconProps> = memo(props => {
  return <FlaskEmptySvg {...props} />;
});
