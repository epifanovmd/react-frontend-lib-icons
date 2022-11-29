import React, { FC, memo } from 'react';
import FlaskRoundBottomEmptySvg from '../svg/flask-round-bottom-empty.svg';

export interface IFlaskRoundBottomEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRoundBottomEmptyIcon: FC<IFlaskRoundBottomEmptyIconProps> = memo(props => {
  return <FlaskRoundBottomEmptySvg {...props} />;
});
