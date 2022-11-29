import React, { FC, memo } from 'react';
import FlaskRoundBottomOutlineSvg from '../svg/flask-round-bottom-outline.svg';

export interface IFlaskRoundBottomOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlaskRoundBottomOutlineIcon: FC<IFlaskRoundBottomOutlineIconProps> = memo(props => {
  return <FlaskRoundBottomOutlineSvg {...props} />;
});
