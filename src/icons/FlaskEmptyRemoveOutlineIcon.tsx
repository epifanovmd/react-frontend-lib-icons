import React, { FC, memo } from 'react';
import FlaskEmptyRemoveOutlineSvg from '../svg/flask-empty-remove-outline.svg';

export interface IFlaskEmptyRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyRemoveOutlineIcon: FC<IFlaskEmptyRemoveOutlineIconProps> = memo(props => {
  return <FlaskEmptyRemoveOutlineSvg {...props} />;
});
