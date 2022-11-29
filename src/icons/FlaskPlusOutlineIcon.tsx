import React, { FC, memo } from 'react';
import FlaskPlusOutlineSvg from '../svg/flask-plus-outline.svg';

export interface IFlaskPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskPlusOutlineIcon: FC<IFlaskPlusOutlineIconProps> = memo(props => {
  return <FlaskPlusOutlineSvg {...props} />;
});
