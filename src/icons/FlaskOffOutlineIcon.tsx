import React, { FC, memo } from 'react';
import FlaskOffOutlineSvg from '../svg/flask-off-outline.svg';

export interface IFlaskOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskOffOutlineIcon: FC<IFlaskOffOutlineIconProps> = memo(props => {
  return <FlaskOffOutlineSvg {...props} />;
});
