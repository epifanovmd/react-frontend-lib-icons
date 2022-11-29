import React, { FC, memo } from 'react';
import FlaskEmptyMinusOutlineSvg from '../svg/flask-empty-minus-outline.svg';

export interface IFlaskEmptyMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyMinusOutlineIcon: FC<IFlaskEmptyMinusOutlineIconProps> = memo(props => {
  return <FlaskEmptyMinusOutlineSvg {...props} />;
});
