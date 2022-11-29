import React, { FC, memo } from 'react';
import FlaskEmptyOutlineSvg from '../svg/flask-empty-outline.svg';

export interface IFlaskEmptyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyOutlineIcon: FC<IFlaskEmptyOutlineIconProps> = memo(props => {
  return <FlaskEmptyOutlineSvg {...props} />;
});
