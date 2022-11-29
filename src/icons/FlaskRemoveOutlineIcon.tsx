import React, { FC, memo } from 'react';
import FlaskRemoveOutlineSvg from '../svg/flask-remove-outline.svg';

export interface IFlaskRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRemoveOutlineIcon: FC<IFlaskRemoveOutlineIconProps> = memo(props => {
  return <FlaskRemoveOutlineSvg {...props} />;
});
