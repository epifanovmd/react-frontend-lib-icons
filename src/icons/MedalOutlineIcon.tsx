import React, { FC, memo } from 'react';
import MedalOutlineSvg from '../svg/medal-outline.svg';

export interface IMedalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedalOutlineIcon: FC<IMedalOutlineIconProps> = memo(props => {
  return <MedalOutlineSvg {...props} />;
});
