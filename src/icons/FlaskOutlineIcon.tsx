import React, { FC, memo } from 'react';
import FlaskOutlineSvg from '../svg/flask-outline.svg';

export interface IFlaskOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskOutlineIcon: FC<IFlaskOutlineIconProps> = memo(props => {
  return <FlaskOutlineSvg {...props} />;
});
