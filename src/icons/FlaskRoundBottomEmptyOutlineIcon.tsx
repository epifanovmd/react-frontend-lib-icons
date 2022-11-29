import React, { FC, memo } from 'react';
import FlaskRoundBottomEmptyOutlineSvg from '../svg/flask-round-bottom-empty-outline.svg';

export interface IFlaskRoundBottomEmptyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRoundBottomEmptyOutlineIcon: FC<IFlaskRoundBottomEmptyOutlineIconProps> = memo(props => {
  return <FlaskRoundBottomEmptyOutlineSvg {...props} />;
});
