import React, { FC, memo } from 'react';
import FlaskEmptyPlusOutlineSvg from '../svg/flask-empty-plus-outline.svg';

export interface IFlaskEmptyPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyPlusOutlineIcon: FC<IFlaskEmptyPlusOutlineIconProps> = memo(props => {
  return <FlaskEmptyPlusOutlineSvg {...props} />;
});
