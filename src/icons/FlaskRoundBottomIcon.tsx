import React, { FC, memo } from 'react';
import FlaskRoundBottomSvg from '../svg/flask-round-bottom.svg';

export interface IFlaskRoundBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRoundBottomIcon: FC<IFlaskRoundBottomIconProps> = memo(props => {
  return <FlaskRoundBottomSvg {...props} />;
});
