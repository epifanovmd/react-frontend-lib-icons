import React, { FC, memo } from 'react';
import FlaskEmptyRemoveSvg from '../svg/flask-empty-remove.svg';

export interface IFlaskEmptyRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyRemoveIcon: FC<IFlaskEmptyRemoveIconProps> = memo(props => {
  return <FlaskEmptyRemoveSvg {...props} />;
});
