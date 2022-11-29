import React, { FC, memo } from 'react';
import FlaskEmptyPlusSvg from '../svg/flask-empty-plus.svg';

export interface IFlaskEmptyPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskEmptyPlusIcon: FC<IFlaskEmptyPlusIconProps> = memo(props => {
  return <FlaskEmptyPlusSvg {...props} />;
});
