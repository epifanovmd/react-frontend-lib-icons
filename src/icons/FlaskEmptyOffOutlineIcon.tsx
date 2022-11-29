import React, { FC, memo } from 'react';
import FlaskEmptyOffOutlineSvg from '../svg/flask-empty-off-outline.svg';

export interface IFlaskEmptyOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyOffOutlineIcon: FC<IFlaskEmptyOffOutlineIconProps> = memo(props => {
  return <FlaskEmptyOffOutlineSvg {...props} />;
});
