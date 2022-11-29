import React, { FC, memo } from 'react';
import FlaskPlusSvg from '../svg/flask-plus.svg';

export interface IFlaskPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskPlusIcon: FC<IFlaskPlusIconProps> = memo(props => {
  return <FlaskPlusSvg {...props} />;
});
